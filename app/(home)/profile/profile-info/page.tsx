"use client";
import React from "react";
import { useFormik, FormikProvider, Form, getIn } from "formik";
import * as Yup from "yup";
import { personalInformationSection } from "@app/utils/userInformationFormHelper";
import { Input, MultiSelect, Select, Textarea } from "@app/components/Ui";
import { User } from "@app/graphql/graphql";
import { FormField } from "@app/types/userInformationForm";
import { useAppSelector } from "@app/redux/store/hooks";

// Helper function to map backend data to initial values
interface IFormValues {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  username: string;
  language: never[];
  sex: string;
  location: {
    country: string;
    state: string;
    city: string;
    zipcode: string;
  };
  summary: string;
  headline: string;
}

const mapUserDataToInitialValues = (user?: User): IFormValues => ({
  firstName: user?.profile?.firstName || "",
  middleName: user?.profile?.middleName || "",
  lastName: user?.profile?.lastName || "",
  dateOfBirth: user?.profile?.dateOfBirth || "",
  username: user?.username || "",
  language: [],
  sex: "",
  location: {
    country: "",
    state: "",
    city: "",
    zipcode: "",
  },
  summary: user?.profile?.summary || "",
  headline: user?.profile?.headline || "",
});

// Helper function to generate Yup validation schema
const generateValidationSchema = (fields: FormField[]) => {
  /* eslint-disable no-unused-vars, @typescript-eslint/no-explicit-any */
  const schema: Record<string, Yup.Schema<any>> = {};

  fields.forEach((field) => {
    if (field.isRequired) {
      switch (field.type) {
        case "text":
        case "textarea":
        case "date":
          schema[field.name] = Yup.string().required(
            `${field.label} is required`
          );
          break;
        case "select":
          schema[field.name] = Yup.string().required(
            `${field.label} is required`
          );
          break;
        case "multiselect":
          schema[field.name] = Yup.array().min(1, `${field.label} is required`);
          break;
        case "nested":
          /* eslint-disable no-unused-vars, @typescript-eslint/no-explicit-any */
          const nestedSchema: Record<string, Yup.Schema<any>> = {};
          field.fields.forEach((nestedField: FormField) => {
            if (nestedField.isRequired) {
              nestedSchema[nestedField.name] = Yup.string().required(
                `${nestedField.label} is required`
              );
            }
          });
          schema[field.name] = Yup.object(nestedSchema);
          break;
        default:
          break;
      }
    }
  });

  return Yup.object(schema);
};

const ProfileInfo = () => {
  const { heading, fields } = personalInformationSection;
  const { user } = useAppSelector((state) => state.user);
  const initialValues = mapUserDataToInitialValues(user);
  const validationSchema = generateValidationSchema(fields);

  const formik = useFormik<IFormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });
  return (
    <FormikProvider value={formik}>
      <Form>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-black dark:text-white mb-6 text-left">
            {heading}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.map((field) => (
              <div className="w-full" key={field.label}>
                {(field.type === "text" || field.type === "date") && (
                  <Input
                    label={field.label}
                    type={field.type}
                    name={field.name}
                    value={getIn(formik.values, field.name)}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                )}
                {field.type === "select" && (
                  <Select
                    label={field.label}
                    name={field.name}
                    options={field.options}
                    value={getIn(formik.values, field.name)}
                    onChange={(value: string | number | (string | number)[]) =>
                      formik.setFieldValue(field.name, value)
                    }
                    // onBlur={formik.handleBlur}
                  />
                )}
                {field.type === "multiselect" && (
                  <MultiSelect
                    label={field.label}
                    name={field.name}
                    options={field.options}
                    value={getIn(formik.values, field.name)}
                    onChange={(value: (string | number)[]) =>
                      formik.setFieldValue(field.name, value)
                    }
                    // onBlur={formik.handleBlur}
                  />
                )}
                {field.type === "textarea" && (
                  <Textarea
                    label={field.label}
                    name={field.name}
                    value={getIn(formik.values, field.name)}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    type={field.type}
                  />
                )}
                {field.type === "nested" && (
                  <div>
                    {field.fields.map((nestedField: FormField) => (
                      <div key={nestedField.label}>
                        {nestedField.type === "select" &&
                          field.name === "location" && (
                            <Select
                              label={nestedField.label}
                              name={`location.${nestedField.name}`}
                              options={nestedField.options}
                              value={getIn(
                                formik.values,
                                `location.${nestedField.name}`
                              )}
                              onChange={(value) =>
                                formik.setFieldValue(
                                  `location.${nestedField.name}`,
                                  value
                                )
                              }
                            />
                          )}
                        {nestedField.type === "text" && (
                          <Input
                            label={nestedField.label}
                            type={nestedField.type}
                            name={`location.${nestedField.name}`}
                            value={getIn(
                              formik.values,
                              `location.${nestedField.name}`
                            )}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {getIn(formik.touched, field.name) &&
                  getIn(formik.errors, field.name) && (
                    <p className="text-red-500 text-sm">
                      {getIn(formik.errors, field.name)}
                    </p>
                  )}
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default ProfileInfo;
