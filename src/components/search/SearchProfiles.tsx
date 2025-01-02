import useMainProfile from "../../lib/hooks/profile/useMainProfile";
import { useSearchProfiles } from "../../lib/hooks/search/useSearchProfiles";
import useInfiniteScroll from "../../lib/hooks/utils/useInfiniteScroll";
import useQuery from "../../lib/hooks/utils/useQuery";
import useLoggedUser from "../../lib/utils/useLoggedUser";
import UserProfile from "../userPanel/UserProfile";

export default function SearchProfiles() {
  const { accessToken, loggedUser } = useLoggedUser();
  const { isFollowingList, toggleFollowing } = useMainProfile();
  const query = useQuery().get("query") || "";
  const { profiles, isLast, setPage } = useSearchProfiles(query, accessToken);

  useInfiniteScroll(setPage, isLast || false);

  return (
    <section className="relative border-x-[1px] border-tertiary-500">
      <section>
        {profiles.length === 0 ? (
          <div className="flex w-full justify-center p-10">
            <p className="text-center text-sm text-tertiary-200">
              No profiles found
            </p>
          </div>
        ) : (
          profiles.map((profile) => (
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
      </section>
    </section>
  );
}
