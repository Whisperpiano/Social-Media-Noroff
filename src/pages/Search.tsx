import { Outlet } from "react-router-dom";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import SearchTabs from "../components/navigation/SearchTabs";
import Header from "../components/ui/Header";

export default function Search() {
  return (
    <section className="relative flex w-full flex-1 flex-col xl:max-w-[600px]">
      <Header icon={PiMagnifyingGlassFill} text="Search results">
        <SearchTabs />
      </Header>
      <Outlet />
    </section>
  );
}
