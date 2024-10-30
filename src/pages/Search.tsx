import { Outlet } from "react-router-dom";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import SearchTabs from "../components/navigation/SearchTabs";

export default function Search() {
  return (
    <section className="relative flex min-h-screen w-full max-w-[600px] flex-col rounded-t-lg">
      <header className="sticky top-0 z-50 flex cursor-pointer flex-col items-center bg-tertiary-900 text-tertiary-50 drop-shadow-2xl">
        <div className="mt-5 flex w-full items-center gap-2.5 rounded-t-lg border border-tertiary-500 p-5">
          <PiMagnifyingGlassFill size={24} fill="currentColor" />
          <h1 className="font-sans text-base font-normal">Search results</h1>
        </div>
        <SearchTabs />
      </header>
      <section className="relative border-x-[1px] border-tertiary-500">
        <Outlet />
      </section>
    </section>
  );
}
