import PostCard from "../posts/PostCard";

export default function ExplorePosts() {
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
