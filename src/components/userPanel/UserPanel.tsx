import Footer from "../ui/Footer";
import PostEditor from "./PostEditor";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

export default function UserPanel() {
  return (
    <aside className="relative mr-2.5 w-full max-w-[300px]">
      <div className="sticky top-5 ml-5 flex flex-col gap-5">
        <SearchBar />
        <UserProfile isUserPanel={true} isMainUser={true} />
        <PostEditor />
      </div>
      <div className="fixed bottom-10 ml-5">
        <Footer />
      </div>
    </aside>
  );
}
