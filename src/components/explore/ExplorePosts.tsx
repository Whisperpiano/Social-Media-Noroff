import useReadAllPosts from "../../lib/hooks/posts/useReadAllPosts";
import useMainProfile from "../../lib/hooks/profile/useMainProfile";
import PostCard from "../posts/PostCard";
import useInfiniteScroll from "../../lib/hooks/utils/useInfiniteScroll";

export default function ExplorePosts() {
  const { posts, setPage, page, isLast } = useReadAllPosts();
  const { isFollowingList, toggleFollowing } = useMainProfile();

  useInfiniteScroll(setPage, isLast || false);

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
