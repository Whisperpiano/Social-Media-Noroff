import {
  PiHouse,
  PiCompass,
  PiBell,
  PiBookmarksLight,
  PiStar,
  PiGear,
  PiHouseFill,
  PiCompassFill,
  PiBellFill,
  PiBookmarksSimpleFill,
  PiStarFill,
  PiGearFill,
} from "react-icons/pi";
import Logo from "../logos/Logo";
import Divider from "../ui/Divider";
import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <aside className="tablet:max-w-[280px] fixed bottom-0 z-[100] ml-0 mt-2.5 w-full rounded-t-xl bg-tertiary-900/90 px-2.5 py-5 backdrop-blur-xl sm:relative sm:z-0 sm:ml-2.5 sm:max-w-fit sm:bg-tertiary-900 sm:p-0 sm:px-0 xl:block">
      <nav className="flex items-center justify-between sm:sticky sm:top-[104px] xl:top-5">
        <ul className="tablet:mr-5 mr-2.5 flex w-full flex-row justify-between gap-2 sm:flex-col">
          <div className="hidden xl:block">
            <Logo />
          </div>

          <NavItem
            to="/home"
            label="Home"
            icons={{ normal: PiHouse, filled: PiHouseFill }}
          />
          <NavItem
            to="/explore"
            label="Explore"
            icons={{ normal: PiCompass, filled: PiCompassFill }}
          />
          <NavItem
            to="/notifications"
            label="Notifications"
            icons={{ normal: PiBell, filled: PiBellFill }}
            disabled
          />
          <NavItem
            to="/bookmarks"
            label="Bookmarks"
            icons={{ normal: PiBookmarksLight, filled: PiBookmarksSimpleFill }}
            disabled
          />
          <NavItem
            to="/favorites"
            label="Favorites"
            icons={{ normal: PiStar, filled: PiStarFill }}
            disabled
          />
          <div className="hidden sm:block">
            <Divider />
          </div>
          <NavItem
            to="/settings"
            label="Settings"
            icons={{ normal: PiGear, filled: PiGearFill }}
            disabled
          />
        </ul>
      </nav>
    </aside>
  );
}
