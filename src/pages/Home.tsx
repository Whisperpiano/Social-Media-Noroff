import Divider from "../components/ui/Divider";
import { PiHouseFill } from "react-icons/pi";

export default function Home() {
  return (
    <section className="w-full max-w-[600px] rounded-t-lg border-x-[1px] border-t-[1px] border-tertiary-500">
      <header className="flex items-center gap-2.5 p-5 text-tertiary-50">
        <PiHouseFill size={24} fill="currentColor" />
        <h1 className="font-sans text-base font-normal">Home</h1>
      </header>
      <Divider />
    </section>
  );
}
