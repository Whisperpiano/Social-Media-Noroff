import { useEffect, useRef } from "react";
import useReadAllPosts from "../../lib/hooks/posts/useReadAllPosts";
import useMainProfile from "../../lib/hooks/profile/useMainProfile";
import PostCard from "../posts/PostCard";

export default function ExplorePosts() {
  const { posts, setPage, page } = useReadAllPosts();
  const { isFollowingList, toggleFollowing } = useMainProfile();
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setPage((prevPage) => prevPage + 1);
        isScrolling.current = true;

        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setPage]);

  return (
    <section className="relative border-x-[1px] border-tertiary-500">
      {posts.map((post, index) => (
        <PostCard
          key={`${post.id}-${index}-${post.created}-${page + Math.random()}`}
          post={post}
          isMainPost={false}
          isUserLoggedPost={false}
          toggleFollowing={toggleFollowing}
          isFollowing={isFollowingList.includes(post.author.name)}
        />
      ))}
    </section>
  );
}
