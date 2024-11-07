import useReadAllPosts from "../../lib/hooks/posts/useReadAllPosts";
import useMainProfile from "../../lib/hooks/profile/useMainProfile";
import PostCard from "../posts/PostCard";
import useInfiniteScroll from "../../lib/hooks/utils/useInfiniteScroll";
import useLoggedUser from "../../lib/utils/useLoggedUser";

export default function ExplorePosts() {
  const { posts, setPage, page, isLast } = useReadAllPosts();
  const { isFollowingList, toggleFollowing } = useMainProfile();
  const { loggedUser } = useLoggedUser();

  useInfiniteScroll(setPage, isLast || false);

  return (
    <section className="relative border-x-[1px] border-tertiary-500">
      {posts.map((post, index) => (
        <PostCard
          key={`${post.id}-${index}-${post.created}-${page + Math.random()}`}
          post={post}
          isMainPost={false}
          isUserLoggedPost={post.author.name === loggedUser}
          toggleFollowing={toggleFollowing}
          isFollowing={isFollowingList.includes(post.author.name)}
        />
      ))}
    </section>
  );
}
