import { Outlet } from "react-router-dom";
import AuthLogo from "../components/logos/AuthLogo";

export default function AuthLayout() {
  return (
    <main className="bg-tertiary-900 text-tertiary-50 h-screen font-sans">
      <section className="mx-auto flex max-w-[500px] flex-col items-center text-center">
        <AuthLogo />
        <Outlet />
      </section>
    </main>
  );
}
