import React from "react";

const DropdownContainer = ({ children }) => {
  return (
    <>
      <div class="relative inline-block">
        {children}
        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            class="w-5 h-5 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default DropdownContainer;
