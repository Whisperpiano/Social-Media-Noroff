import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function AppLayout() {
  return (
    <main className="flex  items-center justify-center h-screen">
      <Navigation />
      <div className="min-w-[600px]">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
