import { NavLink } from "react-router-dom";
import { IconType } from "react-icons";

interface NavItemProps {
  to: string;
  label: string;
  icons: {
    normal: IconType;
    filled: IconType;
  };
  disabled?: boolean;
}

export default function NavItem({
  to,
  label,
  icons: { normal: Normal, filled: Filled },
  disabled = false,
}: NavItemProps) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-tertiary-200 transition-colors duration-300 ${disabled ? "pointer-events-none opacity-75" : "hover:bg-tertiary-500"} ${isActive ? "text-primary-500" : ""}`
        }
      >
        {({ isActive }) => (
          <>
            {isActive ? <Filled size={24} /> : <Normal size={24} />}
            {label}
          </>
        )}
      </NavLink>
    </li>
  );
}
