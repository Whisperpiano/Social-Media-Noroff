import { Link } from "react-router-dom";
import Avatar from "../ui/Avatar";
import Dropdown from "../ui/Dropdown";
import NickName from "./NickName";
import FollowBtn from "../ui/FollowBtn";
import { Media } from "../../lib/types";

interface UserProfileProps {
  isUserPanel: boolean;
  isMainUser: boolean;
  nickname: string;
  avatar: Media | undefined;
  toggleFollowing: (nickname: string) => void;
  isFollowing: boolean;
}

export default function UserProfile({
  isUserPanel = false,
  isMainUser,
  nickname,
  avatar,
  toggleFollowing,
  isFollowing,
}: UserProfileProps) {
  return (
    <div
      className={`flex items-center justify-between gap-2.5 rounded-lg ${isUserPanel ? "border-2 border-tertiary-400 bg-tertiary-500 p-2.5" : "bg-transparent p-0"} `}
    >
      <Link to={`/profile/${nickname}`}>
        <div className="group flex items-center gap-2.5">
          <div className="relative max-w-12">
            <Avatar
              src={avatar?.url || `/avatar_placeholder.jpg`}
              alt={avatar?.alt || "User avatar"}
              indicator={isUserPanel}
            />
          </div>
          <NickName nickname={nickname} />
        </div>
      </Link>
      {isMainUser ? (
        <Dropdown />
      ) : (
        <FollowBtn
          isFollowing={isFollowing}
          toggleFollowing={toggleFollowing}
          nickname={nickname}
        />
      )}
    </div>
  );
}
