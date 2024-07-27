import React, { ChangeEventHandler, FocusEventHandler } from "react";

interface MultiSelectProps {
  values: string[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  onBlur: FocusEventHandler<HTMLSelectElement>;
  label: string;
  name: string;
  options: { value: string; label: string }[];
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  values,
  onChange,
  onBlur,
  label,
  name,
  options,
}) => {
  return (
    <div className="mb-4 w-full">
      <label
        className="block text-gray-600 dark:text-gray-400 text-md font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <select
        id={label}
        value={values}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        multiple
        className="w-full border border-slate-600 appearance-none focus:shadow-outline focus:outline-none rounded-[7px] px-3 py-4 bg-light-background dark:bg-dark-surface text-gray-700 dark:text-gray-300"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiSelect;