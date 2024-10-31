import { PiArrowLeftBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="flex flex-1 items-center gap-2.5 text-tertiary-50 transition-colors duration-300 hover:text-tertiary-200"
      onClick={() => navigate(-1)}
    >
      <PiArrowLeftBold size={24} fill="currentColor" />
      <h1 className="font-sans text-base font-normal">Back</h1>
    </button>
  );
}
