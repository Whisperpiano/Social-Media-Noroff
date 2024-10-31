import Alert from "../ui/Alert";
import Hashtag from "../ui/Hashtag";

export default function ExploreHashtags() {
  return (
    <section className="relative border-x-[1px] border-tertiary-500">
      <div className="p-5">
        <Alert message="Hashtags gaining traction on Noroff Social today." />
      </div>
      <Hashtag text="react" />
      <Hashtag text="tailwindcss" />
      <Hashtag text="reactrouter" />
      <Hashtag text="vite" />
      <Hashtag text="noroff" />
      <Hashtag text="norway" />
      <Hashtag text="javascript" />
      <Hashtag text="typescript" />
      <Hashtag text="css" />
      <Hashtag text="html" />
      <Hashtag text="nextjs" />
      <Hashtag text="reactjs" />
      <Hashtag text="nodejs" />
      <Hashtag text="expressjs" />
      <Hashtag text="mongodb" />
      <Hashtag text="postgresql" />
      <Hashtag text="mysql" />
      <Hashtag text="firebase" />
      <Hashtag text="aws" />
      <Hashtag text="docker" />
    </section>
  );
}
