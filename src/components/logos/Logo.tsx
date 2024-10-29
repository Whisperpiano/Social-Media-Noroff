import { Link } from "react-router-dom";
import logo from "../../assets/noroff.svg";

export default function Logo() {
  return (
    <>
      <Link to="/home">
        <img
          src={logo}
          alt="logo"
          className="w-full max-w-[120px] px-2.5 py-2.5 transition-opacity duration-300 hover:opacity-90"
        />
      </Link>
    </>
  );
}
