import { PiChatCircle } from "react-icons/pi";

export default function ReplyBtn() {
  return (
    <button className="flex items-center gap-1 rounded-lg text-tertiary-200 transition-colors duration-300 hover:text-tertiary-50">
      <PiChatCircle size={20} className="-translate-y-0.5" />
      <span className="text-xs lg:text-sm">40</span>
    </button>
  );
}
