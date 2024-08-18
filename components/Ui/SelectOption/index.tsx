import React, { useState, useRef } from "react";

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  mode?: "single" | "multiple";
  onChange?: (value: string | number | (string | number)[]) => void;
  name: string;
}

const CustomSelect: React.FC<SelectProps> = ({
  label,
  options,
  placeholder = "Select...",
  mode = "single",
  onChange,
  // name,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<(string | number)[]>(
    []
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleOptionClick = (option: string | number) => {
    if (mode === "multiple") {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
      onChange && onChange(selectedOptions);
    } else {
      setSelectedOptions([option]);
      setIsDropdownOpen(false);
      onChange && onChange(option);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div ref={selectRef} className="mb-4 w-full relative">
      <label className="block text-gray-600 dark:text-gray-400 text-md font-bold mb-2">
        {label}
      </label>
      <div
        className="w-full border border-slate-600 bg-light-background dark:bg-dark-surface text-gray-700 dark:text-gray-300 rounded-[7px] px-3 py-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOptions.length > 0 ? (
          selectedOptions
            .map((option) => options.find((opt) => opt.value === option)?.label)
            .join(", ")
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}
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
                  selectedOptions.includes(option.value)
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
