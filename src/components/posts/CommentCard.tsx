import { CommentResponse } from "../../lib/types";
import Timestamp from "../ui/Timestamp";
import UserProfile from "../userPanel/UserProfile";

interface CommentCardProps {
  comment: CommentResponse;
  isUserLoggedComment: boolean;
  toggleFollowing: (nickname: string) => void;
  isFollowing: boolean;
}

export default function CommentCard({
  comment,
  isUserLoggedComment,
  toggleFollowing,
  isFollowing,
}: CommentCardProps) {
  console.log(comment);
  return (
    <article className="border-b border-tertiary-500">
      <section className="flex flex-col gap-5 p-5">
        <div className="flex items-center justify-between gap-2.5">
          <UserProfile
            isUserPanel={false}
            isMainUser={isUserLoggedComment}
            nickname={comment.author.name}
            avatar={comment.author.avatar}
            toggleFollowing={toggleFollowing}
            isFollowing={isFollowing}
            isComment={true}
          />
          <Timestamp created={comment.created} />
        </div>

        <p className="overflow-wrap-anywhere text-sm font-normal text-tertiary-50 lg:text-base">
          {comment.body}
        </p>
      </section>
    </article>
  );
}
