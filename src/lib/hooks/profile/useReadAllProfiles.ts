import { useEffect, useState } from "react";
import { UserProfileResponse } from "../../types";
import useLoggedUser from "../../utils/useLoggedUser";

const API_URL_PROFILES = "https://v2.api.noroff.dev/social/profiles";
const LIMIT = 25;
const apiKey = import.meta.env.VITE_API_KEY;

export default function useReadAllProfiles() {
  const [people, setPeople] = useState<UserProfileResponse[]>([]);
  const [fetchError, setFetchError] = useState("");
  const [page, setPage] = useState(1);
  const [isLast, setIsLast] = useState<boolean>();
  const { accessToken } = useLoggedUser();

  useEffect(() => {
    if (!accessToken) return;

    async function fetchPosts() {
      try {
        const response = await fetch(
          `${API_URL_PROFILES}/?limit=${LIMIT}&page=${page}&_following=true&_followers=true&_posts=true`,
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
        setPeople((prev) => [
          ...prev,
          ...data.filter(
            (newProfile: UserProfileResponse) =>
              !prev.some((profile) => profile.name === newProfile.name),
          ),
        ]);
      } catch (error) {
        setFetchError(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
        );
      }
    }
    fetchPosts();
  }, [accessToken, page]);

  return { people, fetchError, setPage, page, isLast };
}
