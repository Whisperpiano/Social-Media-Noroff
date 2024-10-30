import { NavLink } from "react-router-dom";

export default function ExploreTabs() {
  const activeStyles =
    "font-semibold text-white before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-10 before:-translate-x-1/2 before:translate-y-5 before:rounded-lg before:bg-primary-300 before:content-['']";

  return (
    <div className="flex w-full border-x border-b border-tertiary-500 p-5 text-center text-sm">
      <NavLink
        to="/explore/posts"
        className={({ isActive }) =>
          `relative flex-1 ${isActive ? activeStyles : ""}`
        }
      >
        Posts
      </NavLink>
      <NavLink
        to="/explore/hashtags"
        className={({ isActive }) =>
          `relative flex-1 ${isActive ? activeStyles : ""}`
        }
      >
        Hashtags
      </NavLink>
      <NavLink
        to="/explore/people"
        className={({ isActive }) =>
          `relative flex-1 ${isActive ? activeStyles : ""}`
        }
      >
        People
      </NavLink>
      <NavLink
        to="/explore/trending"
        className={({ isActive }) =>
          `relative flex-1 ${isActive ? activeStyles : ""}`
        }
      >
        Trending
      </NavLink>
    </div>
  );
}
