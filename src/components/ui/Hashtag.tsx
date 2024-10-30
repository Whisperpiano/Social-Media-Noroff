import Divider from "./Divider";
import Dropdown from "./Dropdown";

export default function Hashtag({ text }: { text: string }) {
  return (
    <>
      <div className="flex items-center justify-between gap-2.5 p-5">
        <div>
          <p className="text-sm font-semibold text-white">#{text}</p>
          <p className="text-xs font-normal text-tertiary-200">
            <span>250</span> posts
          </p>
        </div>
        <Dropdown />
      </div>
      <Divider />
    </>
  );
}
