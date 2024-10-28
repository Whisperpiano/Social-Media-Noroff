import { Link } from "react-router-dom";
import authLogo from "../../assets/auth_logo.svg";

export default function AuthLogo() {
  return (
    <>
      <Link to="/auth">
        <img
          src={authLogo}
          alt="auth logo"
          className="aspect-square w-full max-w-32"
        />
      </Link>
    </>
  );
}
