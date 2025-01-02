import { useEffect, useState } from "react";
import { PostsResponse } from "../../types";

const API_URL = "https://v2.api.noroff.dev/social/posts";
const LIMIT = 12;
const apiKey = import.meta.env.VITE_API_KEY;

export function useSearchPosts(query: string, accessToken: string) {
  const [posts, setPosts] = useState<PostsResponse[]>([]);
  const [page, setPage] = useState(1);
  const [isLast, setIsLast] = useState<boolean>();
  useEffect(() => {
    if (!query || !accessToken) return;
    async function fetchProfiles() {
      const response = await fetch(
        `${API_URL}/search?q=${query}&limit=${LIMIT}&page=${page}&_author=true&_comments=true&_reactions=true`,
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
      setPosts(data);
    }
    fetchProfiles();
  }, [accessToken, query, page]);

  return { posts, setPage, isLast };
}
