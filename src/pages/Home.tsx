import PostCard from "../components/posts/PostCard";
import { PiHouseFill } from "react-icons/pi";

export default function Home() {
  return (
    <section className="relative flex w-full max-w-[600px] flex-col rounded-t-lg">
      <header className="sticky top-0 z-50 flex cursor-pointer items-center gap-2.5 bg-tertiary-900 text-tertiary-50 drop-shadow-2xl">
        <div className="mt-5 flex w-full items-center gap-2.5 rounded-t-lg border border-tertiary-500 p-5">
          <PiHouseFill size={24} fill="currentColor" />
          <h1 className="font-sans text-base font-normal">Home</h1>
        </div>
      </header>
      <section className="relative border-x-[1px] border-tertiary-500">
        <PostCard />
        <PostCard image={true} />
        <PostCard image={true} />
        <PostCard />
        <PostCard />
      </section>
    </section>
  );
}
