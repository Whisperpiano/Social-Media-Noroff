import PostCard from "../components/posts/PostCard";
import Header from "../components/ui/Header";
import ProfileBanner from "../components/profile/ProfileBanner";
import ProfileHeader from "../components/profile/ProfileHeader";

export default function Profile() {
  window.scrollTo(0, 0);
  return (
    <section className="relative flex min-h-screen w-full max-w-[600px] flex-col rounded-t-lg">
      <Header text="Profile"></Header>

      <section className="relative min-h-screen border-x-[1px] border-tertiary-500">
        <ProfileBanner />
        <div className="-translate-y-[50px]">
          <ProfileHeader />
          <section>
            <div className="border-y border-tertiary-500 p-5 text-sm lg:text-base">
              <p>Latest post</p>
            </div>
            <div>
              <PostCard />
              <PostCard image={true} />
              <PostCard />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
