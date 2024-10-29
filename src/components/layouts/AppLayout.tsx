import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navigation from "../navigation/Navigation";

export default function AppLayout() {
  return (
    <main className="flex min-h-screen justify-center bg-tertiary-900 pt-5 font-sans text-tertiary-50">
      <Navigation />
      <section className="w-full max-w-[600px]">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
