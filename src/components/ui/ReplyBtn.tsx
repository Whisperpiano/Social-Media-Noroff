import { PiArrowBendUpLeftFill } from "react-icons/pi";

interface ReplyBtnProps {
  comments: number;
  onOpenReplyModal: () => void;
}

export default function ReplyBtn({
  comments,
  onOpenReplyModal,
}: ReplyBtnProps) {
  return (
    <button
      onClick={onOpenReplyModal}
      className="flex items-center gap-1 rounded-lg text-tertiary-200 transition-colors duration-300 hover:text-tertiary-50"
    >
      <PiArrowBendUpLeftFill size={20} className="-translate-y-0.5" />
      <span className="text-xs lg:text-sm"> {comments}</span>
    </button>
  );
}
