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
}

export default function Input({ type, ...props }: InputProps) {
  return (
    <input
      type={type}
      {...props}
      className="rounded-lg border-2 border-tertiary-400 bg-tertiary-500 px-4 py-2.5 outline-none transition-colors duration-300 focus:border-secondary-200"
    />
  );
}
