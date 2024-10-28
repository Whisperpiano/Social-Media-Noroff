import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <>
      <h1 className="mb-5 font-sans text-xl font-semibold">
        Welcome to the Noroff Social Network
      </h1>
      <p className="font-sans text-base font-normal">
        Explore our social network and connect with other students and teachers.
        Start by logging in or registrering to get started.
      </p>
      <div className="mt-8 flex gap-4">
        <Link to="login" className="btn-primary">
          Login
        </Link>
        <Link to="register" className="btn-primary">
          Register
        </Link>
      </div>
    </>
  );
}
