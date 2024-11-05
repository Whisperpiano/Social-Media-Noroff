import { PiGlobeHemisphereEastFill } from "react-icons/pi";
// import ReplyBtn from "../ui/ReplyBtn";
// import LikeBtn from "../ui/LikeBtn";

export default function MainPostFooter() {
  return (
    <div className="flex items-center justify-between border-y border-tertiary-500 p-2.5 sm:p-5">
      <time className="flex items-center gap-1.5 text-xs text-tertiary-200">
        Oct 25, 2024, 12:00 PM <PiGlobeHemisphereEastFill size={15} />
        <span className="text-xs text-tertiary-200/75">(edited)</span>
      </time>
      <div className="flex items-center gap-5">
        {/* <ReplyBtn />
        <LikeBtn /> */}
      </div>
    </div>
  );
}
