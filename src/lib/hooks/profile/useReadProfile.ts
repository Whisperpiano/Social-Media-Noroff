import { useEffect, useState } from "react";

const API_URL = "https://v2.api.noroff.dev/social/profiles";
const API_KEY = "b58ae560-67eb-499f-b95c-97188b151f34";

export type ProfileResponse = {
  name: string;
  email: string;
  bio: string | null;
  avatar: Avatar;
  banner: Banner;
  followers: Follower[];
  following: Following[];
  posts: Post[];
  _count: Count;
};

type Avatar = {
  url: string;
  alt: string;
};

type Banner = {
  url: string;
  alt: string;
};

type Follower = {
  name: string;
  email: string;
  bio: string | null;
  avatar: Avatar;
  banner: Banner;
};

type Following = {
  name: string;
  email: string;
  bio: string | null;
  avatar: Avatar;
  banner: Banner;
};

type Post = {
  id: number;
  owner: string;
  created: string;
  updated: string;
  title: string;
  body: string;
  media: string | null;
  tags: string[];
};

type Count = {
  posts: number;
  followers: number;
  following: number;
};

export default function useReadProfile(nickname: string, accessToken: string) {
  const [profile, setProfile] = useState<ProfileResponse>();
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
              "X-Noroff-API-Key": API_KEY,
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
