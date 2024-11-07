import { useEffect, useRef, Dispatch, SetStateAction } from "react";

export default function useInfiniteScroll(
  callback: Dispatch<SetStateAction<number>>,
): React.MutableRefObject<boolean> {
  const isScrolling = useRef<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        callback((prevPage) => prevPage + 1);
        isScrolling.current = true;

        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback]);

  return isScrolling;
}
