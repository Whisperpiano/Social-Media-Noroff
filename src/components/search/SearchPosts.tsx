import useMainProfile from "../../lib/hooks/profile/useMainProfile";
import { useSearchPosts } from "../../lib/hooks/search/useSearchPosts";
import useInfiniteScroll from "../../lib/hooks/utils/useInfiniteScroll";
import useQuery from "../../lib/hooks/utils/useQuery";
import useLoggedUser from "../../lib/utils/useLoggedUser";
import PostCard from "../posts/PostCard";

export default function SearchPosts() {
  const { accessToken, loggedUser } = useLoggedUser();
  const { isFollowingList, toggleFollowing } = useMainProfile();
  const query = useQuery().get("query") || "";
  const { posts, setPage, isLast } = useSearchPosts(query, accessToken);

  useInfiniteScroll(setPage, isLast || false);
  return (
    <section className="relative border-x-[1px] border-tertiary-500">
      {posts.length === 0 ? (
        <div className="flex w-full justify-center p-10">
          <p className="text-center text-sm text-tertiary-200">
            No posts found
          </p>
        </div>
      ) : (
        posts.map((post) => {
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
        })
      )}
    </section>
  );
}
