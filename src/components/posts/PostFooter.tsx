import LikeBtn from "../ui/LikeBtn";
import ReplyBtn from "../ui/ReplyBtn";
import Timestamp from "../ui/Timestamp";

export default function PostFooter() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <ReplyBtn />
        <LikeBtn />
      </div>
      <div>
        <Timestamp time="2 min" />
      </div>
    </div>
  );
}
