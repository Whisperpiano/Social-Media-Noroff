import { Link, useNavigate } from "react-router-dom";
import Input from "../components/elements/Input";
import Label from "../components/elements/Label";
import { useState } from "react";
import { useRegister } from "../lib/hooks/auth/useRegister";
import Alert from "../components/ui/Alert";
import Loader from "../components/ui/Loader";

export default function Register() {
  const { register, fetchError, isLoading } = useRegister();
  const navigate = useNavigate();

  const [userName, setUserName] = useState({
    value: "",
    valid: true,
    error: "",
  });

  const [userEmail, setUserEmail] = useState({
    value: "",
    valid: true,
    error: "",
  });

  const [userPassword, setUserPassword] = useState({
    value: "",
    valid: true,
    error: "",
  });

  function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userName.valid && userEmail.valid && userPassword.valid) {
      handleRegister();
    }
  }

  async function handleRegister() {
    try {
      const newUser = await register(
        userName.value,
        userEmail.value,
        userPassword.value,
      );
      if (newUser === undefined) {
        resetForm();
        return;
      }
      resetForm();
      navigate("/auth/login");
    } catch (error) {
      console.error(error);
    }
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const pattern = /^[\w]+$/;
    const isValid =
      value === "" ||
      (pattern.test(value) && value.length >= 3 && value.length <= 20);
    let errorMessage = "";
    if (value && !pattern.test(value)) {
      errorMessage = "Please enter a username using only letters and numbers";
    } else if (value && value.length < 3) {
      errorMessage = "Please enter a username using at least 3 letters";
    }

    setUserName({ value, valid: isValid, error: errorMessage });
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const pattern = /^[\w\-.]+@(stud\.)?noroff\.no$/;
    const isValid = value === "" || pattern.test(value);
    let errorMessage = "";
    if (value && !pattern.test(value)) {
      errorMessage = "Please enter a valid noroff.no or stud.noroff.no address";
    }
    setUserEmail({ value, valid: isValid, error: errorMessage });
  }

  function handlePasswordchange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const pattern = /^.{8,}$/;
    const isValid = value === "" || pattern.test(value);
    let errorMessage = "";
    if (value && !pattern.test(value)) {
      errorMessage = "Password must be at least 8 characters";
    }
    setUserPassword({ value, valid: isValid, error: errorMessage });
  }

  function resetForm() {
    setUserName({ value: "", valid: true, error: "" });
    setUserEmail({ value: "", valid: true, error: "" });
    setUserPassword({ value: "", valid: true, error: "" });
  }

  return (
    <>
      <h1 className="mb-5 font-sans text-2xl font-semibold">
        Sign up to Noroff Social
      </h1>

      {fetchError && <Alert message={fetchError} type="error" />}

      <form name="register" className="w-full" onSubmit={handleSumbit}>
        <div className="mt-6 flex flex-col gap-2.5 text-start">
          <div className="flex items-center gap-2.5">
            <Label idToConnect="name">Name</Label>
            {userName.error && (
              <p className="ml-auto text-xs text-error-500">{userName.error}</p>
            )}
          </div>
          <Input
            type="text"
            name="name"
            id="name"
            maxLength={20}
            pattern="^[\w]+$"
            autoComplete="off"
            title="Please enter a username using only letters and numbers"
            value={userName.value}
            onChange={handleNameChange}
            isValid={userName.valid}
            required
          />
        </div>

        <div className="mt-6 flex flex-col gap-2.5 text-start">
          <div className="flex items-center gap-2.5">
            <Label idToConnect="email">Email</Label>
            {userEmail.error && (
              <p className="ml-auto text-xs text-error-500">
                {userEmail.error}
              </p>
            )}
          </div>
          <Input
            type="email"
            name="email"
            id="email"
            pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
            autoComplete="off"
            title="Please enter a valid noroff.no or stud.noroff.no address"
            value={userEmail.value}
            onChange={handleEmailChange}
            isValid={userEmail.valid}
            required
          />
        </div>

        <div className="mt-6 flex flex-col gap-2.5 text-start">
          <div className="flex items-center gap-2.5">
            <Label idToConnect="password">Password</Label>
            {userPassword.error && (
              <p className="ml-auto text-xs text-error-500">
                {userPassword.error}
              </p>
            )}
          </div>
          <Input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            minLength={8}
            value={userPassword.value}
            onChange={handlePasswordchange}
            isValid={userPassword.valid}
            required
          />
        </div>

        <div className="mt-10 flex flex-col">
          <button
            type="submit"
            className="btn-primary w-full"
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : "Register"}
          </button>

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
