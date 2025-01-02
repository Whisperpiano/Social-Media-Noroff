export default function FollowBtn({
  isFollowing,
  toggleFollowing,
  nickname,
}: {
  isFollowing: boolean;
  toggleFollowing: (nickname: string) => void;
  nickname: string;
}) {
  function handleClick() {
    toggleFollowing(nickname);
  }
  return (
    <button
      className={`${isFollowing ? "btn-secondary" : "btn-primary"} text-sm font-semibold`}
      onClick={handleClick}
    >
      <span>{isFollowing ? "Unfollow" : "Follow"}</span>
    </button>
  );
}
