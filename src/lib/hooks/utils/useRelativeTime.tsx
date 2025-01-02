import { useEffect, useState } from "react";
import { getPostTime } from "../../utils/GetPostTime";

export function useRelativeTime(dateString: Date) {
  const [relativeTime, setRelativeTime] = useState("");

  useEffect(() => {
    const date = new Date(dateString);
    setRelativeTime(getPostTime(date));

    const intervalId = setInterval(() => {
      setRelativeTime(getPostTime(date));
    }, 60000);

    return () => clearInterval(intervalId);
  }, [dateString]);

  return relativeTime;
}
