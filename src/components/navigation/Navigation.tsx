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
    <aside className="tablet:max-w-[280px] ml-2.5 mt-2.5 w-full max-w-fit xl:relative xl:block">
      <nav className="sticky top-[104px] flex items-center justify-between xl:top-5">
        <ul className="tablet:mr-5 mr-2.5 flex w-full flex-col gap-2">
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
