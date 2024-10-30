import { PiDotsThreeOutlineFill } from "react-icons/pi";

export default function Dropdown() {
  return (
    <button className="rounded-lg p-2.5 text-tertiary-200 transition-colors duration-300 hover:bg-tertiary-300 hover:text-tertiary-50">
      <PiDotsThreeOutlineFill />
      <span className="sr-only">Upload image</span>
    </button>
  );
}
