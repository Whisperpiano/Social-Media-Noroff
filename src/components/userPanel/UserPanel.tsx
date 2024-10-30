import PostEditor from "./PostEditor";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

export default function UserPanel() {
  return (
    <aside className="ml-5 flex w-full max-w-[300px] flex-col gap-5">
      <SearchBar />
      <UserProfile isUserPanel={true} />
      <PostEditor />
    </aside>
  );
}
