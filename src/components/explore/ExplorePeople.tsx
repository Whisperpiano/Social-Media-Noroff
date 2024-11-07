import Alert from "../ui/Alert";
import { UserProfileResponse } from "../../lib/types";
import useReadAllProfiles from "../../lib/hooks/profile/useReadAllProfiles";
import UserProfile from "../userPanel/UserProfile";
import useMainProfile from "../../lib/hooks/profile/useMainProfile";
import useInfiniteScroll from "../../lib/hooks/utils/useInfiniteScroll";

// import UserProfile from "../userPanel/UserProfile";

export default function ExplorePeople() {
  const { people, setPage } = useReadAllProfiles();
  const { isFollowingList, toggleFollowing } = useMainProfile();

  useInfiniteScroll(setPage);

  return (
    <section className="relative border-x-[1px] border-tertiary-500">
      <div className="p-5">
        <Alert
          message="Remember to be respectful with other people"
          type="success"
        />
      </div>
      <section>
        {people.map((person: UserProfileResponse) => (
          <article
            key={person.name}
            className="border-y border-tertiary-500 p-5"
          >
            <UserProfile
              isUserPanel={false}
              isMainUser={false}
              nickname={person.name}
              avatar={person.avatar}
              toggleFollowing={toggleFollowing}
              isFollowing={isFollowingList.includes(person.name)}
              isComment={false}
            />
          </article>
        ))}
      </section>
    </section>
  );
}
