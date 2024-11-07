import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiMagnifyingGlass, PiXBold } from "react-icons/pi";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (search === "") return;
    e.preventDefault();
    const searchParams = new URLSearchParams({ query: search });
    navigate(`/search/all?${searchParams.toString()}`);
    resetSearch();
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement) {
      activeElement.blur();
    }
  }

  function resetSearch() {
    setSearch("");
  }

  return (
    <form name="search" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium lg:text-base"
      >
        Search
      </label>
      <div className="group relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          {search === "" ? (
            <PiMagnifyingGlass
              size={20}
              className="pointer-events-none text-tertiary-50/50 transition-colors duration-300 group-focus-within:text-tertiary-50"
            />
          ) : (
            <button
              type="button"
              className="cursor-pointer hover:text-white"
              onClick={resetSearch}
            >
              <PiXBold
                size={16}
                className="text-tertiary-200 transition-colors duration-300 hover:text-white group-focus-within:text-white"
              />
            </button>
          )}
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-lg border-2 border-tertiary-400 bg-tertiary-500 p-4 px-4 py-2.5 ps-10 text-sm text-tertiary-50 outline-none transition-colors duration-300 placeholder:text-tertiary-200/50 focus:border-secondary-200 lg:text-base"
          placeholder="Search"
          value={search}
          onChange={handleChange}
          required
        />
      </div>
    </form>
  );
}
