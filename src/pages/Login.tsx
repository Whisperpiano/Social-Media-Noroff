import { Link } from "react-router-dom";
import Input from "../components/elements/Input";
import Label from "../components/elements/Label";

export default function Login() {
  return (
    <>
      <h1 className="mb-5 font-sans text-2xl font-semibold">
        Login to Noroff Social
      </h1>
      <form name="login" className="w-full">
        <div className="mt-6 flex flex-col gap-2.5 text-start">
          <Label idToConnect="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
          />
        </div>

        <div className="mt-6 flex flex-col gap-2.5 text-start">
          <Label idToConnect="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            required
          />
        </div>
        <div className="mt-10 flex flex-col">
          {/* Change to button submit */}
          <Link to="/home" className="btn-primary w-full">
            Login
          </Link>
          <p className="text mt-10 flex justify-center gap-2 text-xs tracking-wide text-tertiary-200">
            Don't have an account?
            <Link
              to="/auth/register"
              className="tracking-wider underline transition-colors duration-300 hover:text-secondary-200"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
