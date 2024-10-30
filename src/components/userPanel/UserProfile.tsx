import Avatar from "../ui/Avatar";
import Dropdown from "../ui/Dropdown";
import NickName from "./NickName";

export default function UserProfile() {
  return (
    <div className="flex items-center justify-between gap-2.5 rounded-lg border-2 border-tertiary-400 bg-tertiary-500 p-2.5">
      <div className="flex items-center gap-2.5">
        <Avatar
          src={"/avatar_placeholder.jpg"}
          alt="Avatar placeholder"
          indicator={true}
        />
        <NickName nickname="nickname" />
      </div>
      <Dropdown />
    </div>
  );
}
