import { useEffect, useState } from "react";
import { UserProfileResponse } from "../../types";

const API_URL = "https://v2.api.noroff.dev/social/profiles";
const LIMIT = 25;

export function useSearchProfiles(query: string, accessToken: string) {
  const [profiles, setProfiles] = useState<UserProfileResponse[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query || !accessToken) return;
    async function fetchProfiles() {
      const response = await fetch(
        `${API_URL}/search?q=${query}&limit=${LIMIT}&page=${page}`,
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
      setProfiles(data);
    }
    fetchProfiles();
  }, [accessToken, query, page]);

  return { profiles, setPage };
}
