import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <h1>Sign up to Noroff Social</h1>
      <Link to="/auth/login">Login</Link>
    </>
  );
}
