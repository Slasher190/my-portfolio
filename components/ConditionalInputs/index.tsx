import {
  InputProps,
  MultiSelectProps,
  SelectProps,
  TextareaProps,
} from "@app/types/inputFormatProps";
import { Input, Textarea, Select, MultiSelect } from "@app/components/Ui";

type InputType = InputProps | TextareaProps | SelectProps | MultiSelectProps;

export default ({ type, label, name, options, ...rest }: InputType) => {
  switch (type) {
    case "text":
    case "email":
    case "password":
      return <Input type={type} label={label} name={name} {...rest} />;
    case "textarea":
      return <Textarea type={type} label={label} name={name} {...rest} />;
    case "select":
      return (
        <Select
          type={type}
          label={label}
          name={name}
          options={options}
          {...rest}
        />
      );
    case "multiselect":
      return (
        <MultiSelect
          type={type}
          label={label}
          name={name}
          options={options}
          {...rest}
        />
      );
    default:
      return null;
  }
};
