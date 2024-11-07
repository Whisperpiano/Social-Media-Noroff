import { PiInfoFill } from "react-icons/pi";

interface AlertProps {
  message: string;
  type: "error" | "success" | "warning";
}

export default function Alert({ message, type }: AlertProps) {
  const alertStyles = {
    error: "border-error-900 bg-error-500/25 text-error-100",
    success: "border-primary-500 bg-[#0A2927] text-primary-100",
    warning: "border-alert-900 bg-alert-500/25 text-alert-100",
  };

  // const iconStyles = {
  //   error:
  //     "text-error-100 border-error-800 bg-error-500/25  hover:bg-error-900 focus:bg-error-900",
  //   success:
  //     "border-primary-500 bg-[#0A2927] text-primary-100 hover:bg-primary-900 focus:bg-primary-900",
  //   warning:
  //     "text-alert-100 border-alert-800 bg-alert-500/25 hover:bg-alert-900 focus:bg-alert-900",
  // };

  return (
    <div
      id="alert"
      className={`flex w-full items-center rounded-lg border p-4 font-sans text-sm font-normal lg:text-base ${alertStyles[type]}`}
      role="alert"
    >
      <PiInfoFill size={20} />
      <span className="sr-only">Alert info</span>
      <div className="ms-2.5">{message}</div>

      {/* {type === "success" && (
        <button
          type="button"
          className={`-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-full border p-1.5 ${iconStyles[type]}`}
          data-dismiss-target="#alert"
          aria-label="Close"
        >
          <PiXBold size={16} />
          <span className="sr-only">Close</span>
        </button>
      )} */}
    </div>
  );
}
