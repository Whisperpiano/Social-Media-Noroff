import { PiHeart } from "react-icons/pi";

export default function LikeBtn({ likes }: { likes: number }) {
  return (
    <button className="flex items-center gap-1 rounded-lg text-tertiary-200 transition-colors duration-300 hover:text-tertiary-50">
      <PiHeart size={20} className="-translate-y-0.5" />
      <span className="text-xs lg:text-sm">{likes}</span>
    </button>
  );
}
