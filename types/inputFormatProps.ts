import { FieldType, Option } from "./userInformationForm";

export interface IBaseInput<T extends FieldType> {
  type: T;
  label: string;
  name: string;
  options?: Option[];
  [key: string]: any;
  disable?: boolean;
}

export interface InputProps
  extends IBaseInput<"email" | "text" | "password" | "date"> {}

export interface MultiSelectProps extends IBaseInput<"multiselect"> {
  options: Option[];
}

export interface SelectProps extends IBaseInput<"select"> {
  options: Option[];
}

export interface TextareaProps extends IBaseInput<"textarea"> {}

export interface CheckboxProps {}
