export type Option = {
  value: string | number;
  label: string;
};

export type FieldType =
  | "text"
  | "checkbox"
  | "select"
  | "email"
  | "multiselect"
  | "nested"
  | "date"
  | "textarea"
  | "password";

export interface BaseField<T extends FieldType> {
  name: string;
  type: T;
  label: string;
  optional?: boolean;
}

export interface TextField extends BaseField<"text"> {
  verification?: boolean;
}

export interface PasswordField extends BaseField<"password"> {
  verification?: boolean;
}

export interface EmailField extends BaseField<"email"> {
  verification?: boolean;
}

export interface SelectField extends BaseField<"select" | "multiselect"> {
  options: Option[];
}

export interface CheckboxField extends BaseField<"checkbox"> {
  defaultChecked?: boolean;
}

export interface DateField extends BaseField<"date"> {
  minDate?: Date;
  maxDate?: Date;
}

export interface TextareaField extends BaseField<"textarea"> {
  maxLength?: number;
}

export interface NestedField extends BaseField<"nested"> {
  fields: FormField[];
}

export type FormField =
  | TextField
  | EmailField
  | SelectField
  | CheckboxField
  | DateField
  | TextareaField
  | NestedField
  | PasswordField;

export interface UserFields {
  heading: string;
  dynamic?: boolean;
  optional?: boolean;
  fields: FormField[];
}
