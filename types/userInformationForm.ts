// const userProfileSchema = {
//   sections: [
//     {
//       heading: "Personal Information",
//       fields: {
//         firstName: { type: "text", label: "First Name" },
//         middleName: { type: "text", label: "Middle Name" },
//         lastName: { type: "text", label: "Last Name" },
//         dateOfBirth: { type: "date", label: "Date of Birth" },
//         username: { type: "text", label: "Username" },
//         languages: {
//           type: "multiselect",
//           label: "Language",
//           options: ["English", "Hindi"],
//         },
//         gender: {
//           type: "select",
//           label: "Gender",
//           options: ["Male", "Female", "Other"],
//         },
//         location: {
//           type: "nested",
//           fields: {
//             country: { type: "select", label: "Country", options: [] },
//             state: { type: "select", label: "State", options: [] },
//             city: { type: "select", label: "City", options: [] },
//             zipcode: { type: "text", label: "Zipcode" },
//           },
//         },
//         summary: { type: "textarea", label: "Summary" },
//         headline: { type: "text", label: "Headline" },
//       },
//     },
//     {
//       heading: "Contact Information",
//       fields: {
//         email: { type: "email", label: "Email", verification: true },
//         phoneNumber: {
//           type: "text",
//           label: "Phone Number",
//           verification: true,
//         },
//       },
//     },
//     {
//       heading: "Experience",
//       dynamic: true,
//       fields: {
//         title: { type: "text", label: "Title" },
//         company: { type: "text", label: "Company" },
//         startDate: { type: "date", label: "Start Date" },
//         endDate: { type: "date", label: "End Date" },
//         location: {
//           type: "nested",
//           fields: {
//             country: { type: "select", label: "Country", options: [] },
//             state: { type: "select", label: "State", options: [] },
//             city: { type: "select", label: "City", options: [] },
//             zipcode: { type: "text", label: "Zipcode" },
//           },
//         },
//       },
//     },
//     {
//       heading: "Education",
//       dynamic: true,
//       fields: {
//         institution: { type: "text", label: "Institution" },
//         degree: { type: "text", label: "Graduation Degree" },
//         fieldOfStudy: { type: "text", label: "Field of Study" },
//         startDate: { type: "date", label: "Start Date" },
//         endDate: { type: "date", label: "End Date" },
//         location: {
//           type: "nested",
//           fields: {
//             country: { type: "select", label: "Country", options: [] },
//             state: { type: "select", label: "State", options: [] },
//             city: { type: "select", label: "City", options: [] },
//             zipcode: { type: "text", label: "Zipcode" },
//           },
//         },
//         description: { type: "textarea", label: "Description" },
//       },
//     },
//     {
//       heading: "Skills",
//       dynamic: true,
//       fields: {
//         name: { type: "text", label: "Name" },
//         proficiency: {
//           type: "select",
//           label: "Proficiency",
//           options: ["Beginner", "Intermediate", "Advanced"],
//         },
//       },
//     },
//     {
//       heading: "Permissions",
//       optional: true,
//       fields: {
//         attribute: { type: "checkbox", label: "Attribute" },
//       },
//     },
//   ],
// };

type Heading = string;

type FieldType =
  | "text"
  | "checkbox"
  | "select"
  | "email"
  | "multiselect"
  | "nested"
  | "date"
  | "textarea";

interface BaseField<T extends FieldType> {
  name: string;
  type: T;
  label: string;
  optional?: boolean;
}

interface TextField extends BaseField<"text"> {
  verification?: boolean;
}

interface EmailField extends BaseField<"email"> {
  verification?: boolean;
}

interface SelectField extends BaseField<"select" | "multiselect"> {
  options: string[];
}

interface CheckboxField extends BaseField<"checkbox"> {
  defaultChecked?: boolean;
}

interface DateField extends BaseField<"date"> {
  minDate?: Date;
  maxDate?: Date;
}

interface TextareaField extends BaseField<"textarea"> {
  maxLength?: number;
}

interface NestedField extends BaseField<"nested"> {
  fields: FormField[];
}

type FormField =
  | TextField
  | EmailField
  | SelectField
  | CheckboxField
  | DateField
  | TextareaField
  | NestedField;

interface UserFields {
  heading: Heading;
  dynamic?: boolean;
  optional?: boolean;
  fields: FormField[];
}

interface UserProfileFormInput {
  sections: UserFields[];
}

export const userForm: UserProfileFormInput = {
  sections: [
    {
      heading: "Personal Information",
      fields: [
        { name: "firstName", type: "text", label: "First Name" },
        { name: "middleName", type: "text", label: "Middle Name" },
        { name: "lastName", type: "text", label: "Last Name" },
        { name: "dateOfBirth", type: "date", label: "Date Of Birth" },
        { name: "username", type: "text", label: "Username" },
        {
          name: "language",
          type: "multiselect",
          label: "Language",
          options: ["English", "Hindi"],
        },
        {
          name: "sex",
          type: "select",
          label: "Sex",
          options: ["Male", "Female", "Other"],
        },
        {
          name: "location",
          type: "nested",
          label: "Location",
          fields: [
            { name: "country", type: "select", label: "Country", options: [] },
            { name: "state", type: "select", label: "State", options: [] },
            { name: "city", type: "select", label: "City", options: [] },
            { name: "zipcode", type: "text", label: "ZipCode" },
          ],
        },
        { name: "summary", type: "textarea", label: "Summary" },
        { name: "headline", type: "textarea", label: "Headline" },
      ],
    },
    {
      heading: "Contact Information",
      fields: [
        { name: "email", type: "email", label: "Email", verification: false },
        {
          name: "phoneNumber",
          type: "text",
          label: "Phone Number",
          verification: false,
        },
      ],
    },
    {
      heading: "Experience",
      dynamic: true,
      fields: [
        { name: "title", type: "text", label: "Title" },
        { name: "company", type: "text", label: "Company" },
        { name: "startDate", type: "date", label: "Start Date" },
        { name: "endDate", type: "date", label: "End Date" },
        {
          name: "location",
          type: "nested",
          label: "Location",
          fields: [
            { name: "country", type: "select", label: "Country", options: [] },
            { name: "state", type: "select", label: "State", options: [] },
            { name: "city", type: "select", label: "City", options: [] },
            { name: "zipcode", type: "text", label: "ZipCode" },
          ],
        },
      ],
    },
    {
      heading: "Education",
      dynamic: true,
      fields: [
        { name: "institution", type: "text", label: "Institution" },
        { name: "degree", type: "text", label: "Degree" },
        { name: "fieldOfStudy", type: "text", label: "Field Of Study" },
        { name: "startDate", type: "date", label: "Start Date" },
        { name: "endDate", type: "date", label: "End Date" },
        {
          name: "location",
          type: "nested",
          label: "Location",
          fields: [
            { name: "country", type: "select", label: "Country", options: [] },
            { name: "state", type: "select", label: "State", options: [] },
            { name: "city", type: "select", label: "City", options: [] },
            { name: "zipcode", type: "text", label: "ZipCode" },
          ],
        },
        { name: "description", type: "textarea", label: "Description" },
      ],
    },
    {
      heading: "Skills",
      fields: [
        { name: "name", type: "text", label: "Name" },
        {
          name: "proficiency",
          type: "select",
          label: "Proficiency",
          options: ["Beginner", "Intermediate", "Advanced"],
        },
      ],
    },
    {
      heading: "Permissions",
      optional: true,
      fields: [{ name: "attribute", type: "checkbox", label: "Attribute" }],
    },
  ],
};
