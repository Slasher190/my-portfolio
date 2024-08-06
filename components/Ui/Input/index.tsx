import { InputProps } from "@app/types/inputFormatProps";
import React from "react";

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className="mb-4 w-full">
      <label
        className="block text-gray-600 dark:text-gray-400 text-md font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        {...rest}
        className="w-full border border-slate-600 appearance-none focus:shadow-outline focus:outline-none rounded-[7px] px-3 py-4 bg-light-background dark:bg-dark-surface text-gray-700 dark:text-gray-300"
      />
    </div>
  );
};

export default Input;
