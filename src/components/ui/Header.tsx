import { IconType } from "react-icons";
import BackButton from "./BackButton";

interface HeaderProps {
  icon?: IconType;
  text: string;
  children?: JSX.Element;
}

export default function Header({ icon: Icon, text, children }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex cursor-pointer items-center gap-2.5 bg-tertiary-900 text-tertiary-50 drop-shadow-2xl">
      <div className="w-full">
        {Icon ? (
          <div className="mt-5 flex w-full items-center gap-2.5 rounded-t-lg border border-tertiary-500 p-5">
            <Icon size={24} fill="currentColor" />
            <h1 className="font-sans text-base font-normal">{text}</h1>
          </div>
        ) : (
          <div className="mt-5 flex w-full items-center gap-2.5 rounded-t-lg border border-tertiary-500 p-5">
            <BackButton />
          </div>
        )}
        {children}
      </div>
    </header>
  );
}
