import React from "react";

const Pagenation = ({
  hasPrev,
  hasNext,
  handlePagination,
  currentpage,
  totalPage,
}) => {
  return (
    <div className="flex my-4 items-center">
      <button
        disabled={!hasPrev}
        onClick={() => handlePagination(currentpage - 1)}
        href="#"
        className={` flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-slate-900 rounded-lg ${
          hasPrev
            ? ` bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"`
            : `bg-gray-700`
        }`}
      >
        <svg
          className="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Previous
      </button>
      <button
        onClick={() => handlePagination(currentpage + 1)}
        disabled={!hasNext}
        href="#"
        className={` flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-slate-900 rounded-lg ${
          hasNext
            ? ` bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"`
            : `bg-gray-700`
        }`}
      >
        Next
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
      <p className="text-lg text-gray-200">
        page {currentpage} of {totalPage}
      </p>
    </div>
  );
};

export default Pagenation;
