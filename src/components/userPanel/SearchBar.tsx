import { PiMagnifyingGlass } from "react-icons/pi";

export default function SearchBar() {
  return (
    <form name="search">
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium"
      >
        Search
      </label>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <PiMagnifyingGlass
            size={20}
            className="text-tertiary-50/50 transition-colors duration-300 group-focus-within:text-tertiary-50"
          />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-lg border-2 border-tertiary-400 bg-tertiary-500 p-4 px-4 py-2.5 ps-10 text-sm text-tertiary-50 outline-none transition-colors duration-300 placeholder:text-tertiary-200/50 focus:border-secondary-200"
          placeholder="Search"
          required
        />
      </div>
    </form>
  );
}
