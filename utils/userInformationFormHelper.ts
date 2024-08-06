import { UserFields } from "@app/types/userInformationForm";

export const personalInformationSection: UserFields = {
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
      options: [
        { value: "EN", label: "English" },
        { value: "HN", label: "Hindi" },
      ],
    },
    {
      name: "sex",
      type: "select",
      label: "Sex",
      options: [
        { value: "M", label: "Male" },
        { value: "F", label: "Female" },
        { value: "O", label: "other" },
      ],
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
};

export const contactInformationSection: UserFields = {
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
};

export const experienceSection: UserFields = {
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
};

export const educationSection: UserFields = {
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
};

export const skillsSection: UserFields = {
  heading: "Skills",
  fields: [
    { name: "name", type: "text", label: "Name" },
    {
      name: "proficiency",
      type: "select",
      label: "Proficiency",
      options: [
        { value: 1, label: "Beginner" },
        { value: 2, label: "Intermediate" },
        { value: 3, label: "Advanced" },
      ],
    },
  ],
};

export const permissionsSection: UserFields = {
  heading: "Permissions",
  optional: true,
  fields: [{ name: "attribute", type: "checkbox", label: "Attribute" }],
};
