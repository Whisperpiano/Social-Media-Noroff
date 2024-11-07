import { PiGlobeHemisphereEastFill } from "react-icons/pi";
import ReplyBtn from "../ui/ReplyBtn";
import LikeBtn from "../ui/LikeBtn";
import { formatDate } from "../../lib/utils/formatDate";

interface PostFooterProps {
  count: {
    comments: number;
    reactions: number;
  };
  created: Date;
  updated: Date;
  id: number;
  userLiked: boolean;
  isUserLoggedPost: boolean;
}

export default function MainPostFooter({
  count,
  created,
  updated,
  id,
  userLiked,
  isUserLoggedPost,
}: PostFooterProps) {
  return (
    <div className="flex items-center justify-between border-y border-tertiary-500 p-2.5 sm:p-5">
      <time className="flex items-center gap-1.5 text-xs text-tertiary-200">
        {formatDate(created)}
        <PiGlobeHemisphereEastFill size={15} />
        {created !== updated && (
          <span className="text-xs text-tertiary-200/75">(edited)</span>
        )}
      </time>
      <div className="flex items-center gap-5">
        <ReplyBtn comments={count.comments} />
        <LikeBtn
          likes={count.reactions}
          id={id}
          userLiked={userLiked}
          isUserLoggedPost={isUserLoggedPost}
        />
      </div>
    </div>
  );
}
