import {
  PiHouse,
  PiCompass,
  PiBell,
  PiBookmarksLight,
  PiStar,
  PiGear,
} from "react-icons/pi";
import Logo from "../logos/Logo";
import Divider from "../ui/Divider";
import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <aside className="w-full max-w-[280px]">
      <nav className="flex items-center justify-between">
        <ul className="mr-5 flex w-full flex-col gap-2">
          <Logo />
          <NavItem to="/home" label="Home" icon={PiHouse} />
          <NavItem to="/explore" label="Explore" icon={PiCompass} />
          <NavItem to="/home" label="Notifications" icon={PiBell} />
          <NavItem to="/home" label="Bookmarks" icon={PiBookmarksLight} />
          <NavItem to="/home" label="Favorites" icon={PiStar} />
          <Divider />
          <NavItem to="/home" label="Settings" icon={PiGear} />
        </ul>
      </nav>
    </aside>
  );
}
