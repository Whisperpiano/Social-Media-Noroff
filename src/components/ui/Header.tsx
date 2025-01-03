import { IconType } from "react-icons";
import BackButton from "./BackButton";
import SearchBar from "../userPanel/SearchBar";

interface HeaderProps {
  icon?: IconType;
  text: string;
  children?: JSX.Element;
}

export default function Header({ icon: Icon, text, children }: HeaderProps) {
  return (
    <header className="sticky top-[67px] z-50 cursor-pointer items-center gap-2.5 bg-tertiary-900 text-tertiary-50 drop-shadow-2xl sm:top-[93px] xl:top-0">
      <div className="border-b border-l border-tertiary-500 p-5 xl:hidden">
        <SearchBar />
      </div>
      <div className="flex">
        <div className="w-full">
          {Icon ? (
            <div className="mt-0 flex w-full items-center gap-2.5 rounded-none border-b border-l border-tertiary-500 px-5 py-5 sm:px-5 xl:mt-5 xl:rounded-t-lg xl:border">
              <Icon size={24} fill="currentColor" />
              <h1 className="font-sans text-sm font-normal lg:text-base">
                {text}
              </h1>
            </div>
          ) : (
            <div className="mt-0 flex w-full items-center gap-2.5 rounded-none border-b border-l border-tertiary-500 p-5 xl:mt-5 xl:rounded-t-lg xl:border">
              <BackButton />
            </div>
          )}
          {children}
        </div>
      </div>
    </header>
  );
}
