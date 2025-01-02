import PostCard from "../components/posts/PostCard";
import { PiHouseFill } from "react-icons/pi";
import Header from "../components/ui/Header";
import { useEffect, useState } from "react";
import useLoggedUser from "../lib/utils/useLoggedUser";
import { PostsResponse } from "../lib/types";
import StartElement from "../components/ui/StartElement";
import useMainProfile from "../lib/hooks/profile/useMainProfile";

const API_URL = "https://v2.api.noroff.dev/social/profiles";
const API_URL2 = "https://v2.api.noroff.dev/social/posts";
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const { accessToken, loggedUser } = useLoggedUser();
  const [posts, setPosts] = useState<PostsResponse[]>([]);
  const { isFollowingList, toggleFollowing } = useMainProfile();

  useEffect(() => {
    if (!accessToken || !loggedUser) return;

    async function fetchPosts() {
      try {
        const responseUserPosts = await fetch(
          `${API_URL}/${loggedUser}/posts?&_author=true&_comments=true&_reactions=true`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Noroff-API-Key": apiKey,
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );

        const { data: userData } = await responseUserPosts.json();
        setPosts((prev) => [...prev, ...userData]);

        const responseFollowingPosts = await fetch(
          `${API_URL2}/following?_author=true&_followers=true&_comments=true&_reactions=true`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Noroff-API-Key": apiKey,
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );

        const { data: followingData } = await responseFollowingPosts.json();
        setPosts((prev) =>
          [...prev, ...followingData].sort(
            (a, b) =>
              new Date(b.created).getTime() - new Date(a.created).getTime(),
          ),
        );
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts();
  }, [accessToken, loggedUser]);

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
