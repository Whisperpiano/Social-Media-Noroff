import BackButton from "../components/ui/BackButton";
import { Link } from "react-router-dom";
import Avatar from "../components/ui/Avatar";
import Dropdown from "../components/ui/Dropdown";
import NickName from "../components/userPanel/NickName";
import PostCard from "../components/posts/PostCard";

export default function Profile() {
  return (
    <section className="relative flex min-h-screen w-full max-w-[600px] flex-col rounded-t-lg">
      <header className="sticky top-0 z-50 flex cursor-pointer flex-col items-center bg-tertiary-900 text-tertiary-50 drop-shadow-2xl">
        <div className="mt-5 flex w-full gap-2.5 rounded-t-lg border border-tertiary-500 p-5">
          <BackButton />
        </div>
      </header>
      <section className="relative min-h-screen border-x-[1px] border-tertiary-500">
        <div>
          <img
            src="/placeholder_horizontal.jpg"
            className="aspect-[3/1] w-full object-cover object-center"
          ></img>
        </div>
        <div className="-translate-y-[50px]">
          <section>
            <div className="flex items-center justify-between px-5">
              <div className="l max-w-[100px] shadow-2xl shadow-black">
                <Avatar
                  src="/avatar_placeholder.jpg"
                  alt="Avatar placeholder"
                  indicator={false}
                />
              </div>
              <div className="flex items-center gap-2.5 self-end">
                <Dropdown />
                <Link
                  to="/profile/edit"
                  className="btn-primary text-sm font-normal"
                >
                  Edit Profile
                </Link>
              </div>
            </div>
            <div className="mt-2.5 px-5">
              <NickName nickname="nickname" />
            </div>
            <div className="p-5">
              <div className="flex flex-col gap-2.5 rounded-lg border border-tertiary-500 p-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-tertiary-200">
                  BIO
                </span>
                <p className="text-xs font-normal text-tertiary-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  faucibus vestibulum mi vel ullamcorper. Nulla facilisi.
                  Vestibulum eros ante, tincidunt ac tempor in, molestie ac sem.
                  Curabitur pharetra lacus et dui pharetra, id sollicitudin urna
                  maximus. Etiam nunc turpis, egestas venenatis lectus non,
                  venenatis fringilla felis. Etiam et rhoncus sapien. Sed eu
                  dictum justo, non porttitor orci. Duis sit amet tincidunt
                  tellus. Cras tempus nibh eget ligula interdum lacinia.
                </p>
              </div>
            </div>
            <div className="mb-5 flex gap-5 px-5">
              <p className="flex gap-1 text-xs text-tertiary-200">
                <span className="font-semibold text-tertiary-50">15</span>posts
              </p>

              <p className="flex gap-1 text-xs text-tertiary-200">
                <span className="font-semibold text-tertiary-50">7</span>
                following
              </p>

              <p className="flex gap-1 text-xs text-tertiary-200">
                <span className="font-semibold text-tertiary-50">2</span>
                followers
              </p>
            </div>
          </section>
          <section>
            <div className="border-y border-tertiary-500 p-5">
              <p>Latest post</p>
            </div>
            <div>
              <PostCard />
              <PostCard image={true} />
              <PostCard />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
