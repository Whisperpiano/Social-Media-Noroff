import { Outlet } from "react-router-dom";
import ExploreTabs from "../components/navigation/ExploreTabs";
import { PiCompassFill } from "react-icons/pi";

export default function Explore() {
  return (
    <section className="relative flex min-h-screen w-full max-w-[600px] flex-col rounded-t-lg">
      <header className="sticky top-0 z-50 flex cursor-pointer flex-col items-center bg-tertiary-900 text-tertiary-50 drop-shadow-2xl">
        <div className="mt-5 flex w-full items-center gap-2.5 rounded-t-lg border border-tertiary-500 p-5">
          <PiCompassFill size={24} fill="currentColor" />
          <h1 className="font-sans text-base font-normal">Explore</h1>
        </div>
        <ExploreTabs />
      </header>
      <section className="relative border-x-[1px] border-tertiary-500">
        <Outlet />
      </section>
    </section>
  );
}
