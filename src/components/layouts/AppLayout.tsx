import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import UserPanel from "../userPanel/UserPanel";

export default function AppLayout() {
  return (
    <main className="flex min-h-screen justify-center bg-tertiary-900 font-sans text-tertiary-50">
      <Navigation />
      <Outlet />
      <UserPanel />
    </main>
  );
}
