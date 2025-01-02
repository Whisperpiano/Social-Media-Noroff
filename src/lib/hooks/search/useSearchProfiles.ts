import { useEffect, useState } from "react";
import { UserProfileResponse } from "../../types";

const API_URL = "https://v2.api.noroff.dev/social/profiles";
const LIMIT = 25;
const apiKey = import.meta.env.VITE_API_KEY;

export function useSearchProfiles(query: string, accessToken: string) {
  const [profiles, setProfiles] = useState<UserProfileResponse[]>([]);
  const [page, setPage] = useState(1);
  const [isLast, setIsLast] = useState<boolean>();

  useEffect(() => {
    if (!query || !accessToken) return;
    async function fetchProfiles() {
      const response = await fetch(
        `${API_URL}/search?q=${query}&limit=${LIMIT}&page=${page}`,
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
      setProfiles(data);
    }
    fetchProfiles();
  }, [accessToken, query, page]);

  return { profiles, setPage, isLast };
}
