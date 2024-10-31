import Alert from "../ui/Alert";
import Avatar from "../ui/Avatar";
import Divider from "../ui/Divider";
import FollowBtn from "../ui/FollowBtn";
import NickName from "../userPanel/NickName";

export default function ExplorePeople() {
  return (
    <>
      <div className="p-5">
        <Alert message="Remember to be respectful with other people" />
      </div>
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
    </>
  );
}
