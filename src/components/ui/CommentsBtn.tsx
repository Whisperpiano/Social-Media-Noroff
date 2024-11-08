import { PiChatCircle } from "react-icons/pi";

export default function CommentsBtn({ comments }: { comments: number }) {
  return (
    <button
      className="disabled flex items-center gap-1 rounded-lg text-tertiary-200 transition-colors duration-300 hover:text-tertiary-50 disabled:cursor-not-allowed disabled:opacity-50"
      disabled
    >
      <PiChatCircle size={20} className="-translate-y-0.5" />
      <span className="text-xs lg:text-sm">{comments}</span>
      <span className="sr-only">Comments</span>
    </button>
  );
}
