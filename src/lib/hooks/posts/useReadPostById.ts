import { useEffect } from "react";
import { CommentResponse, PostsResponse } from "../../types";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useLoggedUser from "../../utils/useLoggedUser";

const API_URL_POSTS = "https://v2.api.noroff.dev/social/posts";

export default function useReadPostById() {
  const [post, setPost] = useState<PostsResponse>();
  const [fetchError, setFetchError] = useState("");
  const [comments, setComments] = useState<CommentResponse[]>([]);
  const [isUserLoggedPost, setIsUserLoggedPost] = useState<boolean>();

  const { loggedUser, accessToken } = useLoggedUser();
  const { id } = useParams();

  useEffect(() => {
    if (!id || !accessToken) return;
    async function fetchPostById() {
      try {
        const response = await fetch(
          `${API_URL_POSTS}/${id}?_author=true&_comments=true&_reactions=true`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Noroff-API-Key": "b58ae560-67eb-499f-b95c-97188b151f34",
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.errors[0].message);
        }
        const { data } = await response.json();
        setPost(data);
        setComments(
          data.comments.sort(
            (a: CommentResponse, b: CommentResponse) =>
              new Date(b.created).getTime() - new Date(a.created).getTime(),
          ),
        );

        setIsUserLoggedPost(data.author.name === loggedUser);
      } catch (error) {
        setFetchError(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
        );
      }
    }
    fetchPostById();
  }, [accessToken, id, loggedUser]);

  return { id, post, fetchError, isUserLoggedPost, comments, loggedUser };
}
