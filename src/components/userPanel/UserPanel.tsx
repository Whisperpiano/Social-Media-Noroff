import PostEditor from "./PostEditor";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

export default function UserPanel() {
  return (
    <aside className="relative w-full max-w-[300px]">
      <div className="sticky top-5 ml-5 flex flex-col gap-5">
        <SearchBar />
        <UserProfile isUserPanel={true} />
        <PostEditor />
      </div>
    </aside>
  );
}
