import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
      </ul>
    </nav>
  );
}
