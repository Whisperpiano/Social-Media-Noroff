import { useState, useEffect, useRef } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import UserLoggedOptions from "./UserLoggedOptions";
import PostOptions from "./PostOptions";

interface DropdownProps {
  isUserPanel: boolean;
  postId?: number;
  onDelete?: () => void;
}

export default function Dropdown({
  isUserPanel,
  postId,
  onDelete,
}: DropdownProps) {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    setIsVisible((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="rounded-lg p-2.5 transition-colors duration-300 hover:bg-tertiary-300 hover:text-tertiary-50"
        onClick={handleClick}
      >
        <PiDotsThreeOutlineFill
          className={`transition-transform duration-300 ${
            isVisible ? "rotate-90 text-primary-500" : "text-tertiary-200"
          }`}
        />
        <span className="sr-only">Upload image</span>
      </button>
      {isUserPanel && (
        <UserLoggedOptions isVisible={isVisible} setIsVisible={setIsVisible} />
      )}
      {!isUserPanel && (
        <PostOptions
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          postId={postId}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}
