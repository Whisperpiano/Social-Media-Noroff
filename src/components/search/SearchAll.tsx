import UserProfile from "../userPanel/UserProfile";
import Hashtag from "../ui/Hashtag";
import PostCard from "../posts/PostCard";

export default function SearchAll() {
  return (
    <section className="relative border-x-[1px] border-tertiary-500">
      <div>
        <p className="border-b border-tertiary-600 bg-tertiary-600/25 p-5 text-xs font-bold uppercase tracking-wider text-tertiary-200">
          Profiles
        </p>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
        <article className="border-y border-tertiary-500 p-5">
          <UserProfile isUserPanel={false} isMainUser={false} />
        </article>
      </div>
      <div>
        <p className="border-b border-tertiary-600 bg-tertiary-600/25 p-5 text-xs font-bold uppercase tracking-wider text-tertiary-200">
          Hashtags
        </p>
        <Hashtag text="react" />
        <Hashtag text="tailwindcss" />
        <Hashtag text="reactrouter" />
      </div>
      <div>
        <p className="border-b border-tertiary-600 bg-tertiary-600/25 p-5 text-xs font-bold uppercase tracking-wider text-tertiary-200">
          Posts
        </p>
        <PostCard />
        <PostCard image={true} />
        <PostCard image={true} />
      </div>
    </section>
  );
}
