import { Outlet } from "react-router-dom";
import AuthLogo from "../logos/AuthLogo";

export default function AuthLayout() {
  return (
    <main className="h-screen bg-tertiary-900 font-sans text-tertiary-50">
      <section className="mx-auto flex max-w-[460px] flex-col items-center p-2.5 text-center">
        <AuthLogo />
        <Outlet />
      </section>
    </main>
  );
}
