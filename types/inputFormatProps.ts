import { FieldType, Option } from "./userInformationForm";

export interface BaseInput<T extends FieldType> {
  type: T;
  label: string;
  name: string;
  options?: Option[];
  [key: string]: any;
}

export interface InputProps extends BaseInput<"email" | "text" | "password"> {}

export interface MultiSelectProps extends BaseInput<"multiselect"> {
  options: Option[];
}

export interface SelectProps extends BaseInput<"select"> {
  options: Option[];
}

export interface TextareaProps extends BaseInput<"textarea"> {}

export interface CheckboxProps {}
