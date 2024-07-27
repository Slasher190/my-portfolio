"use client";

import React, { useState, ChangeEvent } from "react";
import Input from "@app/components/Ui/Input"; // Adjust the import paths as necessary
import Select from "@app/components/Ui/SelectOption";
import MultiSelect from "@app/components/Ui/Multiselect";
import Textarea from "@app/components/Ui/Textarea";

// Mock data for the Select and MultiSelect components
const selectOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const Form: React.FC = () => {
  // State for each component
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState(selectOptions[0].value);
  const [multiSelectValues, setMultiSelectValues] = useState<string[]>([]);
  const [textareaValue, setTextareaValue] = useState("");

  // Handlers
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  const handleMultiSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { options } = e.target;
    const selectedValues: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setMultiSelectValues(selectedValues);
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  return (
    <div className="form-container">
      <Input
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={() => console.log("Input blurred")}
        label="Text Input"
        name="textInput"
      />
      <Select
        value={selectValue}
        onChange={handleSelectChange}
        onBlur={() => console.log("Select blurred")}
        label="Select Option"
        name="selectOption"
        options={selectOptions}
      />
      <MultiSelect
        values={multiSelectValues}
        onChange={handleMultiSelectChange}
        onBlur={() => console.log("MultiSelect blurred")}
        label="Multi Select Option"
        name="multiSelectOption"
        options={selectOptions}
      />
      <Textarea
        placeholder="Enter text here"
        value={textareaValue}
        onChange={handleTextareaChange}
        onBlur={() => console.log("Textarea blurred")}
        label="Text Area"
        name="textArea"
      />
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
