import React, { ChangeEventHandler } from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  label,
}) => {
  return (
    <div className="mb-4 w-full">
      <label
        className="block text-gray-600 dark:text-gray-400 text-md font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-slate-600 appearance-none focus:shadow-outline focus:outline-none rounded-[7px] px-3 py-4 bg-light-background dark:bg-dark-surface text-gray-700 dark:text-gray-300"
      />
    </div>
  );
};

export default Input;
