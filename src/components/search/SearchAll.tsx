import { useSearchProfiles } from "../../lib/hooks/search/useSearchProfiles";
import useLoggedUser from "../../lib/utils/useLoggedUser";
import Hashtag from "../ui/Hashtag";
import useMainProfile from "../../lib/hooks/profile/useMainProfile";
import UserProfile from "../userPanel/UserProfile";
import { useSearchPosts } from "../../lib/hooks/search/useSearchPosts";
import PostCard from "../posts/PostCard";
import useInfiniteScroll from "../../lib/hooks/utils/useInfiniteScroll";
import useQuery from "../../lib/hooks/utils/useQuery";

export default function SearchAll() {
  const { accessToken, loggedUser } = useLoggedUser();
  const { isFollowingList, toggleFollowing } = useMainProfile();
  const query = useQuery().get("query") || "";
  const { profiles } = useSearchProfiles(query, accessToken);
  const { posts, setPage, isLast } = useSearchPosts(query, accessToken);
  const hashtags: string[] = [];

  const slicedProfiles = profiles
    .filter((profile) =>
      profile.name.toLowerCase().includes(query.toLowerCase()),
    )
    .slice(0, 3);

  useInfiniteScroll(setPage, isLast || false);

  return (
    <section className="relative border-x-[1px] border-tertiary-500">
      <div>
        <p className="border-b border-tertiary-600 bg-tertiary-600/25 p-5 text-xs font-bold uppercase tracking-wider text-tertiary-200">
          Profiles
        </p>

        {slicedProfiles.length === 0 ? (
          <div className="flex w-full justify-center p-10">
            <p className="text-center text-sm text-tertiary-200">
              No profiles found
            </p>
          </div>
        ) : (
          slicedProfiles.map((profile) => (
            <article
              key={profile.name}
              className="border-y border-tertiary-500 p-5"
            >
              <UserProfile
                isUserPanel={false}
                isMainUser={profile.name === loggedUser}
                nickname={profile.name}
                avatar={profile.avatar}
                toggleFollowing={toggleFollowing}
                isFollowing={isFollowingList.includes(profile.name)}
                isComment={false}
              />
            </article>
          ))
        )}
      </div>
      {hashtags.length !== 0 && (
        <div>
          <p className="border-b border-tertiary-600 bg-tertiary-600/25 p-5 text-xs font-bold uppercase tracking-wider text-tertiary-200">
            Hashtags
          </p>
          {hashtags.map((hashtag) => (
            <Hashtag key={hashtag} text={hashtag} />
          ))}
        </div>
      )}

      <div>
        <p className="border-b border-tertiary-600 bg-tertiary-600/25 p-5 text-xs font-bold uppercase tracking-wider text-tertiary-200">
          Posts
        </p>
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
      </div>
    </section>
  );
}
