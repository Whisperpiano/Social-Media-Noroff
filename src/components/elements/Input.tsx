type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "search"
  | "tel"
  | "url";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  isValid: boolean;
}

export default function Input({ type, isValid, ...props }: InputProps) {
  return (
    <input
      type={type}
      {...props}
      className={`rounded-lg border-2 border-tertiary-400 bg-tertiary-500 px-4 py-2.5 outline-none transition-colors duration-300 selection:bg-tertiary-200 selection:text-tertiary-900 focus:border-secondary-200 ${isValid ? "" : "border-error-500 selection:border-error-500 focus-within:border-error-500 focus:border-error-500 focus-visible:border-error-500"} ${isValid && props.value ? "border-success-500 selection:border-success-500 focus-within:border-success-500 focus:border-success-500 focus-visible:border-success-500" : ""}`}
    />
  );
}
