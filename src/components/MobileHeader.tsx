import { PiPencilSimpleLineFill } from "react-icons/pi";
import Logo from "./logos/Logo";
import Avatar from "./ui/Avatar";
import { Link } from "react-router-dom";

export default function MobileHeader() {
  const nickname = "nicknameee";
  return (
    <header className="sticky top-0 z-[100] flex w-full grow items-center justify-between border-b border-tertiary-500 bg-tertiary-900 px-5 py-2.5 sm:py-5 xl:hidden">
      <div className="-translate-x-2.5">
        <Logo />
      </div>
      <div className="flex items-center gap-3">
        <button className="aspect-square w-full max-w-12 rounded-lg bg-primary-500 p-2.5">
          <PiPencilSimpleLineFill size={20} />
        </button>
        <Link to={`/profile/${nickname}`} className="max-w-10">
          <Avatar
            src="/avatar_placeholder.jpg"
            alt="Avatar placeholder"
            indicator={false}
          />
        </Link>
      </div>
    </header>
  );
}
