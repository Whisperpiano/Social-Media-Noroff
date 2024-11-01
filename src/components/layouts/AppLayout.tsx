import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import UserPanel from "../userPanel/UserPanel";
import MobileHeader from "../MobileHeader";

export default function AppLayout() {
  return (
    <main className="relative flex min-h-screen flex-wrap justify-center bg-tertiary-900 font-sans text-tertiary-50">
      <MobileHeader />
      <Navigation />
      <Outlet />
      <UserPanel />
    </main>
  );
}
