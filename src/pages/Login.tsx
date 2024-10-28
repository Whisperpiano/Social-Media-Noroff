import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1>Login to Noroff Social</h1>
      <Link to="/home">Home</Link>
      <Link to="/auth/register">Register</Link>
    </>
  );
}
