import { Link } from "react-router-dom";
import authLogo from "../../assets/auth_logo.svg";

export default function AuthLogo() {
  return (
    <Link to="/auth" className="mb-10 mt-10 sm:mt-16">
      <img
        src={authLogo}
        alt="auth logo"
        className="aspect-square w-full max-w-32 transition-opacity duration-500 hover:opacity-90"
      />
    </Link>
  );
}
