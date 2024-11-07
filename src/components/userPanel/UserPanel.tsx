import Footer from "../ui/Footer";
import PostEditor from "./PostEditor";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import { UserProfileResponse } from "../../lib/types";

interface UserPanelProps {
  userProfile?: UserProfileResponse;
}

export default function UserPanel({ userProfile }: UserPanelProps) {
  function handleProfile() {
    console.log("profile");
  }
  return (
    <aside className="relative mr-2.5 hidden w-full max-w-[300px] xl:block">
      <div className="sticky top-5 ml-5 flex flex-col gap-5">
        <SearchBar />
        <UserProfile
          isUserPanel={true}
          isMainUser={true}
          nickname={userProfile?.name || ""}
          avatar={userProfile?.avatar}
          toggleFollowing={handleProfile}
          isFollowing={false}
          isComment={false}
        />
        <PostEditor />
      </div>
      <div className="fixed bottom-10 ml-5">
        <Footer />
      </div>
    </aside>
  );
}
