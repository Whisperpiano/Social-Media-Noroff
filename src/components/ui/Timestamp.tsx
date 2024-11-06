import { PiGlobeHemisphereEastFill } from "react-icons/pi";
import { useRelativeTime } from "../../lib/hooks/utils/useRelativeTime";

export default function Timestamp({ created }: { created: Date }) {
  const relativeTime = useRelativeTime(new Date(created));
  return (
    <div className="flex items-center gap-1 text-xs text-tertiary-200/75 lg:text-sm">
      <PiGlobeHemisphereEastFill size={20} />
      <time dateTime={relativeTime}>{relativeTime}</time>
    </div>
  );
}
