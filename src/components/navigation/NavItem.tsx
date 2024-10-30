import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface NavItemProps {
  to: string;
  label: string;
  icon: IconType;
}

export default function NavItem({ to, label, icon: Icon }: NavItemProps) {
  return (
    <li>
      <Link
        to={to}
        className="group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2.5 transition-colors duration-300 hover:bg-tertiary-500"
      >
        <Icon size={24} />
        {label}
      </Link>
    </li>
  );
}
