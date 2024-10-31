import BackButton from "../components/ui/BackButton";
import Badge from "../components/ui/Badge";
import UserProfile from "../components/userPanel/UserProfile";
import ReplyBtn from "../components/ui/ReplyBtn";
import LikeBtn from "../components/ui/LikeBtn";
import { PiGlobeHemisphereEastFill } from "react-icons/pi";
import PostCard from "../components/posts/PostCard";

export default function SinglePost() {
  window.scrollTo(0, 0);

  return (
    <section className="relative flex min-h-screen w-full max-w-[600px] flex-col rounded-t-lg">
      <header className="sticky top-0 z-50 flex cursor-pointer flex-col items-center bg-tertiary-900 text-tertiary-50 drop-shadow-2xl">
        <div className="mt-5 flex w-full gap-2.5 rounded-t-lg border border-tertiary-500 p-5">
          <BackButton />
        </div>
      </header>
      <section className="relative min-h-screen border-x-[1px] border-tertiary-500">
        <article>
          <section className="flex flex-col gap-5 p-5">
            <UserProfile />
            <p className="text-pretty text-sm font-normal text-tertiary-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus vestibulum mi vel ullamcorper. Nulla facilisi. Vestibulum
              eros ante, tincidunt ac tempor in, molestie ac sem. Curabitur
              pharetra lacus et dui pharetra, id sollicitudin urna maximus.
              Etiam nunc turpis, egestas venenatis lectus non, venenatis
              fringilla felis. Etiam et rhoncus sapien. Sed eu dictum justo, non
              porttitor orci. Duis sit amet tincidunt tellus. Cras tempus nibh
              eget ligula interdum lacinia.
            </p>
            <div>
              <img
                src="/placeholder_horizontal.jpg"
                className="w-full rounded-lg object-cover object-center"
              />
            </div>
            <div>
              <Badge text="react" />
              <Badge text="react" />
            </div>
          </section>
          <div className="flex items-center justify-between border-y border-tertiary-500 p-5">
            <time className="flex items-center gap-1.5 text-xs text-tertiary-200">
              Oct 25, 2024, 12:00 PM <PiGlobeHemisphereEastFill size={15} />
              <span className="text-xs text-tertiary-200/75">(edited)</span>
            </time>
            <div className="flex items-center gap-5">
              <ReplyBtn />
              <LikeBtn />
            </div>
          </div>
        </article>
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
