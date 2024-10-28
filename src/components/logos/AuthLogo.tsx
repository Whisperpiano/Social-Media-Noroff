import { Link } from "react-router-dom";
import authLogo from "../../assets/auth_logo.svg";

export default function AuthLogo() {
  return (
    <>
      <Link to="/auth">
        <img src={authLogo} alt="auth logo" className="w-60 h-60" />
      </Link>
    </>
  );
}
