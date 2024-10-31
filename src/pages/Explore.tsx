import { Outlet } from "react-router-dom";
import ExploreTabs from "../components/navigation/ExploreTabs";
import { PiCompassFill } from "react-icons/pi";
import Header from "../components/ui/Header";

export default function Explore() {
  return (
    <section className="relative flex min-h-screen w-full max-w-[600px] flex-col rounded-t-lg">
      <Header icon={PiCompassFill} text="Explore">
        <ExploreTabs />
      </Header>
      <Outlet />
    </section>
  );
}
