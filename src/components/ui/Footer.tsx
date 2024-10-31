import { PiDotOutlineFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer>
      <p className="text-xs font-semibold tracking-wide text-tertiary-200/75">
        Noroff Social - v.1.0.0
      </p>
      <ul className="mt-1.5 flex items-center justify-center text-xs font-normal tracking-wide text-tertiary-200/75">
        <li className="cursor-pointer transition-all hover:underline">About</li>
        <PiDotOutlineFill size={15} />
        <li className="cursor-pointer transition-all hover:underline">
          Get the app
        </li>
        <PiDotOutlineFill size={15} />
        <li className="cursor-pointer transition-all hover:underline">
          Status
        </li>
        <PiDotOutlineFill size={15} />
        <li className="cursor-pointer transition-all hover:underline">
          Privacy policy
        </li>
      </ul>
    </footer>
  );
}
