import { useEffect, useState } from "react";
import { UserProfileResponse } from "../../types";

const API_URL = "https://v2.api.noroff.dev/social/profiles";
const apiKey = import.meta.env.VITE_API_KEY;

export default function useReadProfile(nickname: string, accessToken: string) {
  const [profile, setProfile] = useState<UserProfileResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string>("");

  useEffect(() => {
    if (!nickname || !accessToken) return;

    async function fetchProfile() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${API_URL}/${nickname}?_following=true&_followers=true&_posts=true`,
          {
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

        const { data } = await response.json();
        setProfile(data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setFetchError(error.message);
          setIsLoading(false);
        } else {
          setFetchError("An unexpected error ocurred");
          setIsLoading(false);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfile();
  }, [accessToken, nickname]);

  return { profile, isLoading, fetchError };
}
