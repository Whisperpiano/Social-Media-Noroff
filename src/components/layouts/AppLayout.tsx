import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navigation from "../Navigation";

export default function AppLayout() {
  return (
    <main className="flex justify-center pt-5">
      <Navigation />
      <section className="w-full max-w-[600px]">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
