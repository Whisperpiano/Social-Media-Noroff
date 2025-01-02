import { useEffect, useState } from "react";
import { PiHeart, PiHeartFill } from "react-icons/pi";
import useLoggedUser from "../../lib/utils/useLoggedUser";
import likePost from "../../lib/hooks/posts/like";

export default function LikeBtn({
  likes,
  id,
  userLiked,
  isUserLoggedPost,
}: {
  likes: number;
  id: number;
  userLiked: boolean;
  isUserLoggedPost: boolean;
}) {
  const [liked, setLiked] = useState(userLiked);
  const [likesNumber, setLikesNumber] = useState(likes);
  const { accessToken } = useLoggedUser();

  useEffect(() => {
    setLiked(userLiked);
    setLikesNumber(likes);
  }, [userLiked, likes]);

  const handleLike = async () => {
    try {
      const newLikedState = !liked;
      setLiked(newLikedState);
      setLikesNumber((prev) => (newLikedState ? prev + 1 : prev - 1));
      await likePost(id, "👍", accessToken);
    } catch (error) {
      console.log(error);
      setLiked(liked);
      setLikesNumber(likesNumber);
    }
  };

  return (
    <button
      className="flex items-center gap-1 rounded-lg text-tertiary-200 transition-colors duration-300 hover:text-tertiary-50 disabled:cursor-default disabled:text-tertiary-200 disabled:opacity-75"
      disabled={isUserLoggedPost}
      onClick={handleLike}
    >
      {liked ? (
        <PiHeartFill
          size={20}
          className="-translate-y-0.5 fill-red-600"
          fill="currentColor"
        />
      ) : (
        <PiHeart size={20} className="-translate-y-0.5" fill="currentColor" />
      )}
      <span className="text-xs lg:text-sm">{likesNumber}</span>
    </button>
  );
}
