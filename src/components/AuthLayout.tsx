import { Outlet } from "react-router-dom";
import AuthLogo from "../components/logos/AuthLogo";

export default function AuthLayout() {
  return (
    <main className="bg-tertiary-900 flex h-screen flex-col items-center justify-center font-sans">
      <AuthLogo />
      <Outlet />
    </main>
  );
}
