import { Link } from "react-router-dom";
import Input from "../components/Input";
import Label from "../components/Label";

export default function Register() {
  return (
    <>
      <h1 className="mb-5 font-sans text-xl font-semibold">
        Sign up to Noroff Social
      </h1>

      <form name="register" className="w-full">
        <div className="flex flex-col gap-2.5 text-start">
          <Label idToConnect="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            maxLength={20}
            pattern="^[\w]+$"
            autoComplete="off"
            title="Please enter a username using only letters and numbers"
            required
          />
        </div>

        <div className="mt-5 flex flex-col gap-2.5 text-start">
          <Label idToConnect="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
            autoComplete="off"
            title="Please enter a valid noroff.no or stud.noroff.no address"
            required
          />
        </div>

        <div className="mt-5 flex flex-col gap-2.5 text-start">
          <Label idToConnect="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            minLength={8}
            required
          />
        </div>

        <div className="mt-10 flex flex-col">
          {/* Change to button submit */}
          <Link to="/auth/login" className="btn-primary w-full">
            Register
          </Link>
          <p className="text mt-10 flex justify-center gap-2 text-xs tracking-wide text-tertiary-200">
            Already have an account?
            <Link
              to="/auth/login"
              className="tracking-wider underline transition-colors duration-300 hover:text-secondary-200"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
