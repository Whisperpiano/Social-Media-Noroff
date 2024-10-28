import { Link } from "react-router-dom";
import authLogo from "../../assets/auth_logo.svg";

export default function AuthLogo() {
  return (
    <Link to="/auth" className="mb-10 mt-20">
      <img
        src={authLogo}
        alt="auth logo"
        className="aspect-square w-full max-w-32"
      />
    </Link>
  );
}
