import { useState } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

export default function Dropdown() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible((prev) => !prev);
  }
  return (
    <div className="relative">
      <button
        className="rounded-lg p-2.5 text-tertiary-200 transition-colors duration-300 hover:bg-tertiary-300 hover:text-tertiary-50"
        onClick={handleClick}
      >
        <PiDotsThreeOutlineFill />
        <span className="sr-only">Upload image</span>
      </button>
      <div
        id="dropdownDotsHorizontal"
        className={`absolute z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700 ${isVisible ? "" : "hidden"}`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconHorizontalButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Separated link
          </a>
        </div>
      </div>
    </div>
  );
}
