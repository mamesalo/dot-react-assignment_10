import React, { useState } from "react";

const SearchBar = ({ handleSearch, query, totalResult }) => {
  const [value, setvalue] = useState("");
  const onClick = () => {
    if (!value) {
      return;
    }
    handleSearch(value);
  };
  return (
    <div className="flex items-center justify-center gap-4">
      <div className=" ">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            id="default-search"
            className="block  md:w-96  p-4 ps-10 text-sm  border  rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Movies..."
            required
          />
          <button
            onClick={onClick}
            disabled={!value}
            type="submit"
            className={` text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ${
              value
                ? `bg-blue-600 hover:bg-blue-700 focus:ring-blue-800`
                : `bg-gray-600`
            }`}
          >
            Search
          </button>
        </div>
      </div>
      {query && (
        <button
          className="text-gray-200 bg-red-600 rounded-lg text-sm px-3 py-2 hover:bg-red-700"
          onClick={() => {
            setvalue("");
            handleSearch();
          }}
        >
          Clear Filter
        </button>
      )}
      <p className="text-gray-200 text-start">Total movie = {totalResult}</p>
    </div>
  );
};

export default SearchBar;
