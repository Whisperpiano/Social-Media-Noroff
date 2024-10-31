import PostCard from "../components/posts/PostCard";
import { PiHouseFill } from "react-icons/pi";
import Header from "../components/ui/Header";

export default function Home() {
  return (
    <section className="relative flex w-full max-w-[600px] flex-col rounded-t-lg">
      <Header icon={PiHouseFill} text="Home" />
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
