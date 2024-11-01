import PostCard from "../components/posts/PostCard";
import { PiHouseFill } from "react-icons/pi";
import Header from "../components/ui/Header";

export default function Home() {
  return (
    <section className="relative flex w-full flex-1 flex-col xl:max-w-[600px]">
      <Header icon={PiHouseFill} text="Home" />
      <section className="relative border-l border-tertiary-500 xl:border-x">
        <PostCard />
        <PostCard image={true} />
        <PostCard image={true} />
        <PostCard />
        <PostCard />
      </section>
    </section>
  );
}
