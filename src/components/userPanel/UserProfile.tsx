import { Link } from "react-router-dom";
import Avatar from "../ui/Avatar";
import Dropdown from "../ui/Dropdown";
import NickName from "./NickName";
import FollowBtn from "../ui/FollowBtn";

interface UserProfileProps {
  isUserPanel: boolean;
  isMainUser: boolean;
}

export default function UserProfile({
  isUserPanel = false,
  isMainUser = false,
}: UserProfileProps) {
  const nickname = "nicknameee";
  return (
    <div
      className={`flex items-center justify-between gap-2.5 rounded-lg ${isUserPanel ? "border-2 border-tertiary-400 bg-tertiary-500 p-2.5" : "bg-transparent p-0"} `}
    >
      <Link to={`/profile/${nickname}`}>
        <div className="group flex items-center gap-2.5">
          <div className="relative max-w-12">
            <Avatar
              src={"/avatar_placeholder.jpg"}
              alt="Avatar placeholder"
              indicator={isUserPanel}
            />
          </div>
          <NickName nickname="nickname" />
        </div>
      </Link>
      {isMainUser ? <Dropdown /> : <FollowBtn isFollowing={false} />}
    </div>
  );
}
