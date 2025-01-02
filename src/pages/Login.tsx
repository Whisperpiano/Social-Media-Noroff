import { Link, useNavigate } from "react-router-dom";
import Input from "../components/elements/Input";
import Label from "../components/elements/Label";
import { useState } from "react";
import useLogin from "../lib/hooks/auth/useLogin";
import Loader from "../components/ui/Loader";
import Alert from "../components/ui/Alert";

export default function Login() {
  const { login, isLoading, fetchError } = useLogin();
  const navigate = useNavigate();

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
    if (userEmail.valid && userPassword.valid) {
      handleLogin();
    }
  }

  async function handleLogin() {
    try {
      const logUser = await login(userEmail.value, userPassword.value);
      if (logUser === undefined) {
        resetForm();
        return;
      }
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: logUser.name,
          accessToken: logUser.accessToken,
        }),
      );
      resetForm();
      navigate("/home");
    } catch (error) {
      console.log(error);
      return;
    }
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
    setUserEmail({ value: "", valid: true, error: "" });
    setUserPassword({ value: "", valid: true, error: "" });
  }

  return (
    <>
      <h1 className="mb-5 font-sans text-2xl font-semibold">
        Login to Noroff Social
      </h1>

      {fetchError && <Alert message={fetchError} type="error" />}

      <form name="login" className="w-full" onSubmit={handleSumbit}>
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
            {isLoading ? <Loader /> : "Login"}
          </button>
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
