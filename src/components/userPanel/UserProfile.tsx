import Avatar from "../ui/Avatar";
import Dropdown from "../ui/Dropdown";
import NickName from "./NickName";

interface UserProfileProps {
  isUserPanel?: boolean;
}

export default function UserProfile({ isUserPanel = false }: UserProfileProps) {
  return (
    <div
      className={`flex cursor-pointer items-center justify-between gap-2.5 rounded-lg ${isUserPanel ? "border-2 border-tertiary-400 bg-tertiary-500 p-2.5" : "bg-transparent p-0"} `}
    >
      <div className="group flex items-center gap-2.5">
        <Avatar
          src={"/avatar_placeholder.jpg"}
          alt="Avatar placeholder"
          indicator={isUserPanel}
        />
        <NickName nickname="nickname" />
      </div>
      <Dropdown />
    </div>
  );
}
