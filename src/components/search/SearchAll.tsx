import Avatar from "../ui/Avatar";
import Divider from "../ui/Divider";
import FollowBtn from "../ui/FollowBtn";
import NickName from "../userPanel/NickName";
import Hashtag from "../ui/Hashtag";
import PostCard from "../posts/PostCard";

export default function SearchAll() {
  return (
    <>
      <div>
        <p className="border-b border-tertiary-600 bg-tertiary-600/25 p-5 text-xs font-bold uppercase tracking-wider text-tertiary-200">
          Profiles
        </p>
        <div className="flex items-center justify-between p-5">
          <div className="flex cursor-pointer items-center gap-2.5">
            <div className="max-w-12">
              <Avatar
                src={"/avatar_placeholder.jpg"}
                alt="Avatar placeholder"
                indicator={false}
              />
            </div>
            <NickName nickname="nickname" />
          </div>
          <FollowBtn isFollowing={false} />
        </div>
        <Divider />
        <div className="flex items-center justify-between p-5">
          <div className="flex cursor-pointer items-center gap-2.5">
            <div className="max-w-12">
              <Avatar
                src={"/avatar_placeholder.jpg"}
                alt="Avatar placeholder"
                indicator={false}
              />
            </div>
            <NickName nickname="nickname" />
          </div>
          <FollowBtn isFollowing={true} />
        </div>
        <Divider />
        <div className="flex items-center justify-between p-5">
          <div className="flex cursor-pointer items-center gap-2.5">
            <div className="max-w-12">
              <Avatar
                src={"/avatar_placeholder.jpg"}
                alt="Avatar placeholder"
                indicator={false}
              />
            </div>
            <NickName nickname="nickname" />
          </div>
          <FollowBtn isFollowing={true} />
        </div>
        <Divider />
      </div>
      <div>
        <p className="border-b border-tertiary-600 bg-tertiary-600/25 p-5 text-xs font-bold uppercase tracking-wider text-tertiary-200">
          Hashtags
        </p>
        <Hashtag text="react" />
        <Hashtag text="tailwindcss" />
        <Hashtag text="reactrouter" />
      </div>
      <div>
        <p className="border-b border-tertiary-600 bg-tertiary-600/25 p-5 text-xs font-bold uppercase tracking-wider text-tertiary-200">
          Posts
        </p>
        <PostCard />
        <PostCard image={true} />
        <PostCard image={true} />
      </div>
    </>
  );
}
