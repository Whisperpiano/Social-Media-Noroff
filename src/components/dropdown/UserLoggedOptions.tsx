import { NavLink, useNavigate } from "react-router-dom";

export default function UserLoggedOptions({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();

  function handleLogout() {
    const confirmation = confirm("Are you sure you want to log out?");
    if (confirmation) {
      setIsVisible(false);
      try {
        localStorage.removeItem("user");
        navigate("/auth");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    }
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
            Edit profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/profile/favorites"}
            className="pointer-events-none block px-4 py-2 opacity-75 transition-colors duration-300 hover:bg-tertiary-300 hover:text-white"
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/profile/bookmarks"}
            className="pointer-events-none block px-4 py-2 opacity-75 transition-colors duration-300 hover:bg-tertiary-300 hover:text-white"
          >
            Bookmarks
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/profile/preferences"}
            className="pointer-events-none block px-4 py-2 opacity-75 transition-colors duration-300 hover:bg-tertiary-300 hover:text-white"
          >
            Preferences
          </NavLink>
        </li>
      </ul>
      <div className="py-2 text-sm text-tertiary-200">
        <button
          onClick={handleLogout}
          className="block w-full px-4 py-2 text-left transition-colors duration-300 hover:bg-tertiary-300 hover:text-white"
        >
          Log out
        </button>
      </div>
    </div>
  );
}

// <div
//       id="dropdownDotsHorizontal"
//       className={`invisible absolute right-0 top-10 z-10 w-44 divide-y divide-tertiary-300 rounded-lg border border-tertiary-300 bg-tertiary-700 shadow-2xl xl:visible xl:absolute xl:right-0 xl:top-10 ${isVisible ? "" : "hidden"}`}
//     ></div>
