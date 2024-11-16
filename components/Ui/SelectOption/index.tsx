import React, { useState, useRef, useEffect } from "react";

interface ISelectOption {
  value: string | number;
  label: string;
}

interface ISelectProps {
  label: string;
  options: ISelectOption[];
  placeholder?: string;
  mode?: "single" | "multiple";
  onChange: (value: string | number | (string | number)[]) => void;
  name: string;
  value: string | number | (string | number)[];
}

const CustomSelect: React.FC<ISelectProps> = ({
  label,
  options,
  placeholder = "Select...",
  mode = "single",
  value,
  onChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleOptionClick = (option: string | number) => {
    if (mode === "multiple") {
      const currentValue = Array.isArray(value) ? value : [];
      const updatedValue = currentValue.includes(option)
        ? currentValue.filter((opt) => opt !== option)
        : [...currentValue, option];
      onChange(updatedValue);
    } else {
      onChange(option);
      setIsDropdownOpen(false);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const renderSelectedOptions = () => {
    if (mode === "multiple" && Array.isArray(value)) {
      return value
        .map(
          (selectedValue) =>
            options.find((opt) => opt.value === selectedValue)?.label
        )
        .filter(Boolean)
        .join(", ");
    }
    const selectedOption = options.find((opt) => opt.value === value);
    return selectedOption ? selectedOption.label : placeholder;
  };

  return (
    <div ref={selectRef} className="mb-4 w-full relative">
      <label className="block text-gray-600 dark:text-gray-400 text-md font-bold mb-2">
        {label}
      </label>
      <div
        className="w-full border border-slate-600 bg-light-background dark:bg-dark-surface text-gray-700 dark:text-gray-300 rounded-[7px] px-3 py-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <span>{renderSelectedOptions()}</span>
      </div>

      {isDropdownOpen && (
        <div className="absolute w-full bg-white dark:bg-dark-surface border border-slate-600 mt-2 rounded-[7px] max-h-48 overflow-y-auto shadow-lg z-10">
          {mode === "multiple" && (
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full px-3 py-2 border-b border-gray-300 dark:border-gray-700 outline-none bg-white dark:bg-dark-surface"
            />
          )}
          <ul className="max-h-40 overflow-y-auto">
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${
                  Array.isArray(value) && value.includes(option.value)
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }`}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
