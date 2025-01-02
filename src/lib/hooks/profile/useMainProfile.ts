import { useEffect, useState } from "react";
import useLoggedUser from "../../utils/useLoggedUser";
import { UserProfileResponse } from "../../types";
import { unfollow } from "./unfollow";
import { follow } from "./follow.";

const apiKey = import.meta.env.VITE_API_KEY;

interface Media {
  url: string;
  alt: string;
}

interface FollowingUser {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
}

const API_URL = "https://v2.api.noroff.dev/social/profiles";

export default function useMainProfile() {
  const { accessToken, loggedUser } = useLoggedUser();
  const [userLoggedProfile, setUserLoggedProfile] =
    useState<UserProfileResponse>();
  const [isFollowingList, setIsFollowingList] = useState<string[]>([]);

  const toggleFollowing = (nickname: string) => {
    if (isFollowingList.includes(nickname)) {
      unfollow(nickname, accessToken);
      setIsFollowingList((prev) => prev.filter((item) => item !== nickname));
    } else {
      follow(nickname, accessToken);
      setIsFollowingList((prev) => [...prev, nickname]);
    }
  };

  useEffect(() => {
    if (!loggedUser) return;
    async function fetchUserProfile() {
      try {
        const response = await fetch(
          `${API_URL}/${loggedUser}?_following=true&_followers=true&_posts=true`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Noroff-API-Key": apiKey,
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        const { data } = await response.json();
        setUserLoggedProfile(data);
        data.following.map((following: FollowingUser) =>
          setIsFollowingList((prev) => [...prev, following.name]),
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserProfile();
  }, [accessToken, loggedUser]);

  return { userLoggedProfile, isFollowingList, toggleFollowing };
}
