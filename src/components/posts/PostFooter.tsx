import LikeBtn from "../ui/LikeBtn";
import ReplyBtn from "../ui/ReplyBtn";
import Timestamp from "../ui/Timestamp";

interface PostFooterProps {
  count: {
    comments: number;
    reactions: number;
  };
  created: Date;
}

export default function PostFooter({ count, created }: PostFooterProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <ReplyBtn comments={count.comments} />
        <LikeBtn likes={count.reactions} />
      </div>
      <div>
        <Timestamp created={created} />
      </div>
    </div>
  );
}
