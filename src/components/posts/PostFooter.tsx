import LikeBtn from "../ui/LikeBtn";
import ReplyBtn from "../ui/ReplyBtn";
import Timestamp from "../ui/Timestamp";

interface PostFooterProps {
  count: {
    comments: number;
    reactions: number;
  };
  created: Date;
  id: number;
  userLiked: boolean;
  isUserLoggedPost: boolean;
}

export default function PostFooter({
  count,
  created,
  id,
  userLiked,
  isUserLoggedPost,
}: PostFooterProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <ReplyBtn comments={count.comments} />
        <LikeBtn
          likes={count.reactions}
          id={id}
          userLiked={userLiked}
          isUserLoggedPost={isUserLoggedPost}
        />
      </div>
      <div>
        <Timestamp created={created} />
      </div>
    </div>
  );
}
