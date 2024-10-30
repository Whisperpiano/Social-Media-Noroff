export default function FollowBtn({ isFollowing }: { isFollowing: boolean }) {
  return (
    <button className={`${isFollowing ? "btn-secondary" : "btn-primary"}`}>
      <span>{isFollowing ? "Unfollow" : "Follow"}</span>
    </button>
  );
}
