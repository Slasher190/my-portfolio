import { useState, useRef, useEffect } from "react";

interface IMultiSelectOption {
  value: string | number;
  label: string;
}

interface IMultiSelectProps {
  label: string;
  options: IMultiSelectOption[];
  placeholder?: string;
  name: string;
  value: (string | number)[]; // Controlled by Formik
  onChange: (value: (string | number)[]) => void; // Provided by Formik
}

const MultiSelect: React.FC<IMultiSelectProps> = ({
  label,
  options,
  placeholder = "Please select",
  name,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (selectedValue: string | number) => {
    const updatedValues = value.includes(selectedValue)
      ? value.filter((v) => v !== selectedValue) // Remove if already selected
      : [...value, selectedValue]; // Add if not selected
    onChange(updatedValues);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-4 w-full">
      <label
        className="block text-gray-600 dark:text-gray-400 text-md font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="relative" ref={dropdownRef}>
        <div
          className="w-full border border-slate-600 rounded-[7px] px-3 py-4 bg-light-background dark:bg-dark-surface text-gray-700 dark:text-gray-300 flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="flex flex-wrap gap-1">
            {value.length > 0 ? (
              value.map((selectedValue) => {
                const option = options.find(
                  (opt) => opt.value === selectedValue
                );
                return (
                  <span
                    key={selectedValue}
                    className="inline-flex items-center bg-slate-100 dark:bg-slate-700 text-sm font-medium text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
                  >
                    {option?.label}
                    <button
                      type="button"
                      onClick={
                        () => handleSelect(selectedValue) /* Toggle selection */
                      }
                      className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      ×
                    </button>
                  </span>
                );
              })
            ) : (
              <span className="text-gray-400">{placeholder}</span>
            )}
          </div>
          <span className="ml-2 text-gray-400">&#9660;</span>
        </div>
        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-1 border border-slate-600 rounded-md bg-white dark:bg-dark-surface z-10 max-h-60 overflow-y-auto shadow-lg">
            {options.map((option) => (
              <div
                key={option.value}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${
                  value.includes(option.value)
                    ? "bg-gray-100 dark:bg-gray-600"
                    : ""
                }`}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
