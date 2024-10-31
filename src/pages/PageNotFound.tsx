import { Link } from "react-router-dom";
import Footer from "../components/ui/Footer";

export default function PageNotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-tertiary-900 text-center">
      <div className="flex max-w-[600px] flex-col gap-5 p-5 text-tertiary-50">
        <h1 className="font-sans text-6xl font-extrabold">404</h1>
        <h2 className="font-sans text-2xl font-semibold">Page not found</h2>
        <p className="text-base text-tertiary-200">
          The page you're looking for seems to have wandered off. It might be
          lost in the digital void or never existed in the first place.
        </p>
        <div className="mt-5">
          <Link to="/home" className="btn-primary">
            Go back home
          </Link>
        </div>
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </section>
  );
}
