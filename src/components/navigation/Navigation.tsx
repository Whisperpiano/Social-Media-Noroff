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
    <aside className="relative ml-2.5 w-full max-w-[280px]">
      <nav className="sticky top-5 flex items-center justify-between">
        <ul className="mr-5 flex w-full flex-col gap-2">
          <Logo />

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
          <Divider />
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
