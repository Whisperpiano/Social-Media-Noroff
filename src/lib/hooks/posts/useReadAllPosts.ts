import { useEffect, useState } from "react";
import { PostsResponse } from "../../types";
import useLoggedUser from "../../utils/useLoggedUser";

const API_URL2 = "https://v2.api.noroff.dev/social/posts";
const LIMIT = 12;
const apiKey = import.meta.env.VITE_API_KEY;

export default function useReadAllPosts() {
  const [posts, setPosts] = useState<PostsResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [page, setPage] = useState(1);
  const [isLast, setIsLast] = useState<boolean>();
  const { accessToken } = useLoggedUser();

  useEffect(() => {
    if (!accessToken) return;

    async function fetchPosts() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${API_URL2}/?limit=${LIMIT}&page=${page}&_author=true&_comments=true&_reactions=true`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Noroff-API-Key": apiKey,
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.errors[0].message);
        }
        const { data, meta } = await response.json();
        setIsLast(meta.isLastPage);
        setPosts((prev) => [...prev, ...data]);
      } catch (error) {
        setFetchError(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
        );
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, [accessToken, page]);

  return { posts, isLoading, fetchError, setPage, page, isLast };
}
