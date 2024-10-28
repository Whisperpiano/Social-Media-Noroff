import { Outlet } from "react-router-dom";
import AuthLogo from "../components/logos/AuthLogo";

export default function AuthLayout() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <AuthLogo />
      <Outlet />
    </main>
  );
}
