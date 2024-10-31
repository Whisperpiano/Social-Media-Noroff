import { PiGlobeHemisphereEastFill } from "react-icons/pi";

export default function Timestamp({ time }: { time: string }) {
  return (
    <div className="flex items-center gap-1 text-xs text-tertiary-200/75 lg:text-sm">
      <PiGlobeHemisphereEastFill size={20} />
      <time dateTime={time}>{time}</time>
    </div>
  );
}
