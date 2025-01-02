import { Outlet } from "react-router-dom";
import ExploreTabs from "../components/navigation/ExploreTabs";
import { PiCompassFill } from "react-icons/pi";
import Header from "../components/ui/Header";

export default function Explore() {
  return (
    <section className="relative flex w-full flex-1 flex-col xl:max-w-[600px]">
      <Header icon={PiCompassFill} text="Explore">
        <ExploreTabs />
      </Header>
      <Outlet />
    </section>
  );
}
