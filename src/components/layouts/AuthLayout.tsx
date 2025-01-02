import { Outlet, useNavigate } from "react-router-dom";
import AuthLogo from "../logos/AuthLogo";
import { useEffect } from "react";

export default function AuthLayout() {
  const navigation = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigation("/home");
    }
  }, [navigation]);

  return (
    <main className="h-screen max-h-screen bg-tertiary-900 font-sans text-tertiary-50">
      <section className="mx-auto flex max-w-[460px] flex-col items-center p-2.5 text-center">
        <AuthLogo />
        <Outlet />
      </section>
    </main>
  );
}
