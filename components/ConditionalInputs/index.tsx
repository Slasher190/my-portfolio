import {
  InputProps,
  MultiSelectProps,
  SelectProps,
  TextareaProps,
} from "@app/types/inputFormatProps";
import { Input, Textarea, Select, MultiSelect } from "@app/components/Ui";

interface CommonProps {
  type: string;
  label: string;
  name: string;
  [key: string]: string | number | boolean | undefined | string[] | number[]; // Adjust types as needed
}

type FormFieldProps =
  | (InputProps & CommonProps)
  | (TextareaProps & CommonProps)
  | (SelectProps & CommonProps)
  | (MultiSelectProps & CommonProps);

const FormField: React.FC<FormFieldProps> = ({
  type,
  label,
  name,
  options,
  ...rest
}) => {
  switch (type) {
    case "text":
    case "email":
    case "password":
    case "date": // Allow "date" type
      return <Input type={type} label={label} name={name} {...rest} />;
    case "textarea":
      return <Textarea type={type} label={label} name={name} {...rest} />;
    case "select":
      return <Select label={label} name={name} options={options} {...rest} />;
    case "multiselect":
      return (
        <MultiSelect
          label={label}
          name={name}
          type={type}
          options={options}
          {...rest}
        />
      );
    default:
      return null;
  }
};

FormField.displayName = "FormField";

export default FormField;
