import PostCard from "../components/posts/PostCard";
import Header from "../components/ui/Header";
import ProfileBanner from "../components/profile/ProfileBanner";
import ProfileHeader from "../components/profile/ProfileHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLoggedUser from "../lib/utils/useLoggedUser";
import useReadProfile from "../lib/hooks/profile/useReadProfile";
import Loader from "../components/ui/Loader";
import useMainProfile from "../lib/hooks/profile/useMainProfile";
import { PostsResponse } from "../lib/types";

const API_URL = "https://v2.api.noroff.dev/social/profiles";
const apiKey = import.meta.env.VITE_API_KEY;

export default function Profile() {
  const [posts, setPosts] = useState<PostsResponse[]>([]);
  const { nickname } = useParams();
  const { accessToken, loggedUser } = useLoggedUser();
  const { profile, isLoading, fetchError } = useReadProfile(
    nickname || "",
    accessToken,
  );
  const { isFollowingList, toggleFollowing } = useMainProfile();
  const { banner, name, bio, avatar, _count } = profile || {};
  const isMainUser = nickname === loggedUser;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!accessToken || !nickname) return;

    async function fetchPostsByUser() {
      try {
        const response = await fetch(
          `${API_URL}/${nickname}/posts?&_author=true&_comments=true&_reactions=true`,
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
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostsByUser();
  }, [accessToken, nickname]);

  console.log(posts);

  return (
    <section className="relative flex w-full flex-1 flex-col xl:max-w-[600px]">
      <Header text="Profile"></Header>

      <section className="relative min-h-screen border-x-[1px] border-tertiary-500">
        {isLoading && (
          <div className="flex w-full justify-center p-10">
            <Loader />
          </div>
        )}
        {fetchError && (
          <div className="w-full p-10 text-center">
            <p>{fetchError}</p>
          </div>
        )}
        {!isLoading && !fetchError && (
          <>
            <ProfileBanner banner={banner || { url: "", alt: "" }} />
            <div className="-translate-y-[50px]">
              <ProfileHeader
                name={name || ""}
                bio={bio || "null"}
                avatar={avatar || { url: "", alt: "" }}
                count={_count || { followers: 0, following: 0, posts: 0 }}
                isMainUser={isMainUser}
                toggleFollowing={toggleFollowing}
                isFollowing={isFollowingList.includes(nickname || "")}
              />
              <section>
                <div className="border-y border-tertiary-500 p-5 text-sm lg:text-base">
                  <p>Latest post</p>
                </div>
                <div>
                  {posts.length > 0 ? (
                    posts.map((post) => {
                      const isUserLoggedPost = post.author.name === loggedUser;
                      return (
                        <PostCard
                          key={post.id}
                          post={post}
                          isMainPost={false}
                          isUserLoggedPost={isUserLoggedPost}
                          toggleFollowing={toggleFollowing}
                          isFollowing={isFollowingList.includes(
                            post.author.name,
                          )}
                        />
                      );
                    })
                  ) : (
                    <p className="p-5 font-sans text-sm text-tertiary-200">
                      No posts yet
                    </p>
                  )}
                </div>
              </section>
            </div>
          </>
        )}
      </section>
    </section>
  );
}
