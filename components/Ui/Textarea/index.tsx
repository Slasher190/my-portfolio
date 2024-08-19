import { TextareaProps } from "@app/types/inputFormatProps";

const Textarea: React.FC<TextareaProps> = ({ label, ...rest }) => {
  return (
    <div className="mb-4 w-full">
      <label
        className="block text-gray-600 dark:!text-gray-400 text-md font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        id={label}
        className="w-full border border-slate-600 appearance-none focus:shadow-outline focus:outline-none rounded-[7px] px-3 py-4 bg-dark-surface dark:!bg-dark-surface text-gray-700 dark:!text-gray-300"
        rows={4}
        {...rest}
      />
    </div>
  );
};

export default Textarea;
