import PostCard from "../components/posts/PostCard";
import { PiHouseFill } from "react-icons/pi";
import Header from "../components/ui/Header";
import { useEffect, useState } from "react";
import useLoggedUser from "../lib/utils/useLoggedUser";
import { PostsResponse, UserProfileResponse } from "../lib/types";
import StartElement from "../components/ui/StartElement";

const API_URL = "https://v2.api.noroff.dev/social/profiles";
const API_URL2 = "https://v2.api.noroff.dev/social/posts";

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

export default function Home() {
  const { accessToken, loggedUser } = useLoggedUser();
  const [posts, setPosts] = useState<PostsResponse[]>([]);
  const [userLoggedProfile, setUserLoggedProfile] =
    useState<UserProfileResponse>();
  const [isFollowingList, setIsFollowingList] = useState<string[]>([]);

  function toggleFollowing(nickname: string) {
    if (isFollowingList.includes(nickname)) {
      unfollow(nickname);
      setIsFollowingList((prev) => prev.filter((item) => item !== nickname));
      console.log(isFollowingList);
    } else {
      follow(nickname);
      setIsFollowingList((prev) => [...prev, nickname]);
      console.log(isFollowingList);
    }
  }

  async function unfollow(nickname: string) {
    try {
      const response = await fetch(`${API_URL}/${nickname}/unfollow`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Noroff-API-Key": "b58ae560-67eb-499f-b95c-97188b151f34",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.errors[0].message);
      }
      const { data } = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function follow(nickname: string) {
    try {
      const response = await fetch(`${API_URL}/${nickname}/follow`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Noroff-API-Key": "b58ae560-67eb-499f-b95c-97188b151f34",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.errors[0].message);
      }
      const { data } = await response.json();
      console.log(data);
      // setIsFollowingList((prev) => [...prev, nickname]);
    } catch (error) {
      console.log(error);
    }
  }

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
              "X-Noroff-API-Key": "b58ae560-67eb-499f-b95c-97188b151f34",
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

  useEffect(() => {
    if (!accessToken || !loggedUser) return;

    async function fetchPostsByUser() {
      try {
        const response = await fetch(
          `${API_URL}/${loggedUser}/posts?&_author=true&_comments=true&_reactions=true`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Noroff-API-Key": "b58ae560-67eb-499f-b95c-97188b151f34",
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );

        const { data } = await response.json();
        setPosts((prev) => [...prev, ...data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostsByUser();
  }, [accessToken, loggedUser]);

  useEffect(() => {
    if (!accessToken || !loggedUser) return;
    async function fetchPostsFromFollowing() {
      try {
        const response = await fetch(
          `${API_URL2}/following?_author=true&_followers=true&_comments=true&_reactions=true`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Noroff-API-Key": "b58ae560-67eb-499f-b95c-97188b151f34",
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        const { data } = await response.json();
        setPosts((prev) =>
          [...prev, ...data].sort(
            (a, b) =>
              new Date(b.created).getTime() - new Date(a.created).getTime(),
          ),
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostsFromFollowing();
  }, [accessToken, loggedUser]);

  console.log(isFollowingList);
  console.log(userLoggedProfile);

  return (
    <section className="relative flex w-full flex-1 flex-col xl:max-w-[600px]">
      <Header icon={PiHouseFill} text="Home" />
      <section className="relative h-full border-l border-tertiary-500 xl:border-x">
        {posts.length === 0 && <StartElement />}
        {posts.map((post) => {
          const isUserLoggedPost = post.author.name === loggedUser;
          return (
            <PostCard
              key={post.id}
              post={post}
              isMainPost={false}
              isUserLoggedPost={isUserLoggedPost}
              toggleFollowing={toggleFollowing}
              isFollowing={isFollowingList.includes(post.author.name)}
            />
          );
        })}
      </section>
    </section>
  );
}
