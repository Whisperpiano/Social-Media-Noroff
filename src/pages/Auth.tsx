import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <>
      <h1>Welcome to the Noroff Social Network</h1>
      <p>
        Explore our social network and connect with other students and teachers.
        Start by logging in or registrering to get started.
      </p>
      <Link to="login">Login</Link>
      <Link to="register">Register</Link>
    </>
  );
}
