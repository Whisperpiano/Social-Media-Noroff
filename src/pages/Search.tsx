import { Outlet } from "react-router-dom";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import SearchTabs from "../components/navigation/SearchTabs";
import Header from "../components/ui/Header";

export default function Search() {
  return (
    <section className="relative flex min-h-screen w-full max-w-[600px] flex-col rounded-t-lg">
      <Header icon={PiMagnifyingGlassFill} text="Search results">
        <SearchTabs />
      </Header>
      <Outlet />
    </section>
  );
}
