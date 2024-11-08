import { NavLink } from "react-router-dom";

export default function PostOptions({
  isVisible,
  setIsVisible,
  postId,
  onDelete,
}: {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  postId?: number;
  onDelete?: () => void;
}) {
  function handleEditButton() {
    console.log("edit button clicked");
    setIsVisible(false);
    console.log(postId);
  }

  return (
    <div
      id="dropdownDotsHorizontal"
      className={`absolute right-0 top-10 z-10 w-44 divide-y divide-tertiary-300 rounded-lg border border-tertiary-300 bg-tertiary-700 shadow-2xl ${isVisible ? "" : "hidden"}`}
    >
      <ul
        className="py-2 text-sm text-tertiary-200"
        aria-labelledby="dropdownMenuIconHorizontalButton"
      >
        <li>
          <NavLink
            to={`/profile/edit`}
            className="block px-4 py-2 transition-colors duration-300 hover:bg-tertiary-300 hover:text-white"
            onClick={() => setIsVisible(false)}
          >
            View
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/profile/bookmarks"}
            className="pointer-events-none block px-4 py-2 opacity-75 transition-colors duration-300 hover:bg-tertiary-300 hover:text-white"
          >
            Copy link
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/profile/preferences"}
            className="pointer-events-none block px-4 py-2 opacity-75 transition-colors duration-300 hover:bg-tertiary-300 hover:text-white"
          >
            Get embed code
          </NavLink>
        </li>
      </ul>
      <div className="py-2 text-sm">
        <button
          onClick={handleEditButton}
          className="block w-full px-4 py-2 text-left text-tertiary-200 transition-colors duration-300 hover:bg-tertiary-300 hover:text-white"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="block w-full px-4 py-2 text-left text-error-500 transition-colors duration-300 hover:bg-tertiary-300 hover:text-error-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
