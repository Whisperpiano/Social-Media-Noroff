import { Link } from "react-router-dom";
import Avatar from "../ui/Avatar";
import Dropdown from "../ui/Dropdown";
import NickName from "../userPanel/NickName";
import { Media } from "../../lib/types";
import FollowBtn from "../ui/FollowBtn";

interface ProfileHeaderProps {
  name: string;
  bio: string | null;
  avatar: Media;
  count: {
    followers: number;
    following: number;
    posts: number;
  };
  isMainUser: boolean;
  toggleFollowing: (nickname: string) => void;
  isFollowing: boolean;
}

export default function ProfileHeader({
  name,
  bio,
  avatar,
  count,
  isMainUser,
  toggleFollowing,
  isFollowing,
}: ProfileHeaderProps) {
  return (
    <>
      <section>
        <div className="flex items-center justify-between px-5">
          <div className="l max-w-[100px] shadow-2xl shadow-black">
            <Avatar src={avatar.url} alt={avatar.alt} indicator={false} />
          </div>
          <div className="flex items-center gap-2.5 self-end">
            <Dropdown />
            {isMainUser && (
              <Link
                to="/profile/edit"
                className="btn-primary text-sm font-normal"
              >
                Edit Profile
              </Link>
            )}
            {!isMainUser && (
              <FollowBtn
                isFollowing={isFollowing}
                toggleFollowing={toggleFollowing}
                nickname={name}
              />
            )}
          </div>
        </div>
        <div className="mt-2.5 px-5">
          <NickName nickname={name} />
        </div>
        <div className="p-5">
          <div className="flex flex-col gap-2.5 rounded-lg border border-tertiary-500 p-2.5">
            <span className="text-sm font-bold uppercase tracking-wider text-tertiary-200">
              BIO
            </span>
            <p className="text-pretty text-sm font-normal text-tertiary-200 lg:text-sm">
              {bio}
            </p>
          </div>
        </div>
        <div className="mb-5 flex gap-5 px-5">
          <p className="flex gap-1 text-xs text-tertiary-200 lg:text-sm">
            <span className="font-semibold text-tertiary-50">
              {count.posts}
            </span>
            posts
          </p>

          <p className="flex gap-1 text-xs text-tertiary-200 lg:text-sm">
            <span className="font-semibold text-tertiary-50">
              {count.following}
            </span>
            following
          </p>

          <p className="flex gap-1 text-xs text-tertiary-200 lg:text-sm">
            <span className="font-semibold text-tertiary-50">
              {count.followers}
            </span>
            followers
          </p>
        </div>
      </section>
    </>
  );
}
