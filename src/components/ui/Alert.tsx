import { PiInfoFill, PiXBold } from "react-icons/pi";

export default function Alert({ message }: { message: string }) {
  return (
    <div
      id="alert"
      className="flex items-center rounded-lg border border-primary-900 bg-[#0A2927] p-4 font-sans text-sm font-normal text-primary-100 lg:text-base"
      role="alert"
    >
      <PiInfoFill size={20} />
      <span className="sr-only">Alert info</span>
      <div className="ms-2.5">{message}</div>

      <button
        type="button"
        className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary-900 bg-[#0A2927] p-1.5 text-primary-100 hover:bg-primary-900 focus:bg-primary-900"
        data-dismiss-target="#alert"
        aria-label="Close"
      >
        <PiXBold size={16} />
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
}
