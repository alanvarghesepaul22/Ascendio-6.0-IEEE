import React from "react";
import { cn } from "../../utils/cn";

const RadioBtn = ({ children, htmlFor, Label }) => {
  return (
    <div className="RadioBtnContainer">
      <label className="RadioInputContainer" htmlFor={htmlFor}>
        {children}
        <span className="RadioBtnSvg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full scale-105"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label className="RadioLabelContainer" htmlFor={htmlFor}>
        <p className="RadioLabelContainerP">{Label}</p>
      </label>
    </div>
  );
};

export default RadioBtn;

export const RadioBtnContainer = ({ children, className }) => {
  return (
    <div className={cn("w-full grid gap-4", className)}>
      {children}
    </div>
  );
};
