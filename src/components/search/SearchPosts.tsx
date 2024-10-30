import PostCard from "../posts/PostCard";
export default function SearchPosts() {
  return (
    <>
      <PostCard />
      <PostCard image={true} />
      <PostCard image={true} />
      <PostCard />
      <PostCard />
    </>
  );
}
