import PostCard from "../posts/PostCard";
export default function SearchPosts() {
  return (
    <section className="relative border-x-[1px] border-tertiary-500">
      <PostCard />
      <PostCard image={true} />
      <PostCard image={true} />
      <PostCard />
      <PostCard />
    </section>
  );
}
