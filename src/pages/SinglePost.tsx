import PostCard from "../components/posts/PostCard";
import Header from "../components/ui/Header";

export default function SinglePost() {
  window.scrollTo(0, 0);

  return (
    <section className="relative flex min-h-screen w-full max-w-[600px] flex-col rounded-t-lg">
      <Header text="Post"></Header>
      <section className="relative min-h-screen border-x-[1px] border-tertiary-500">
        <PostCard isMainPost={true} image={true} />
        <article>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </article>
      </section>
    </section>
  );
}
