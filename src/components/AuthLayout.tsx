import { Outlet } from "react-router-dom";
import AuthLogo from "../components/logos/AuthLogo";

export default function AuthLayout() {
  return (
    <main className="h-screen bg-tertiary-900 font-sans text-tertiary-50">
      <section className="mx-auto flex max-w-[400px] flex-col items-center text-center">
        <AuthLogo />
        <Outlet />
      </section>
    </main>
  );
}
