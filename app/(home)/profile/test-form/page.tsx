"use client";
import React from "react";
import { Field, Form, Formik, FieldArray } from "formik";

const initialValues = {
  personalInformation: {
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    username: "",
    language: [],
    sex: "",
    location: {
      country: "",
      state: "",
      city: "",
      zipcode: "",
    },
    summary: "",
    headline: "",
  },
  contactInformation: {
    email: "",
    phoneNumber: "",
  },
  experience: [
    {
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      location: {
        country: "",
        state: "",
        city: "",
        zipcode: "",
      },
    },
  ],
  education: [
    {
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      location: {
        country: "",
        state: "",
        city: "",
        zipcode: "",
      },
      description: "",
    },
  ],
  skills: [
    {
      name: "",
      proficiency: "",
    },
  ],
  permissions: {
    attribute: false,
  },
};

const UserProfileForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log("Form Values", values);
      }}
    >
      {({ values }) => (
        <Form>
          <h2>Personal Information</h2>
          <div>
            <label>First Name:</label>
            <Field name="personalInformation.firstName" type="text" />
          </div>
          <div>
            <label>Middle Name:</label>
            <Field name="personalInformation.middleName" type="text" />
          </div>
          <div>
            <label>Last Name:</label>
            <Field name="personalInformation.lastName" type="text" />
          </div>
          <div>
            <label>Date of Birth:</label>
            <Field name="personalInformation.dateOfBirth" type="date" />
          </div>
          <div>
            <label>Username:</label>
            <Field name="personalInformation.username" type="text" />
          </div>
          <div>
            <label>Language:</label>
            <Field as="select" name="personalInformation.language" multiple>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </Field>
          </div>
          <div>
            <label>Sex:</label>
            <Field as="select" name="personalInformation.sex">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Field>
          </div>
          <div>
            <h3>Location</h3>
            <label>Country:</label>
            <Field name="personalInformation.location.country" type="text" />
            <label>State:</label>
            <Field name="personalInformation.location.state" type="text" />
            <label>City:</label>
            <Field name="personalInformation.location.city" type="text" />
            <label>Zip Code:</label>
            <Field name="personalInformation.location.zipcode" type="text" />
          </div>
          <div>
            <label>Summary:</label>
            <Field name="personalInformation.summary" as="textarea" />
          </div>
          <div>
            <label>Headline:</label>
            <Field name="personalInformation.headline" as="textarea" />
          </div>

          <h2>Contact Information</h2>
          <div>
            <label>Email:</label>
            <Field name="contactInformation.email" type="email" />
          </div>
          <div>
            <label>Phone Number:</label>
            <Field name="contactInformation.phoneNumber" type="text" />
          </div>

          <h2>Experience</h2>
          <FieldArray name="experience">
            {({ remove, push }) => (
              <div>
                {values.experience.map((_, index) => (
                  <div key={index}>
                    <h3>Experience {index + 1}</h3>
                    <div>
                      <label>Title:</label>
                      <Field name={`experience.${index}.title`} type="text" />
                    </div>
                    <div>
                      <label>Company:</label>
                      <Field name={`experience.${index}.company`} type="text" />
                    </div>
                    <div>
                      <label>Start Date:</label>
                      <Field
                        name={`experience.${index}.startDate`}
                        type="date"
                      />
                    </div>
                    <div>
                      <label>End Date:</label>
                      <Field name={`experience.${index}.endDate`} type="date" />
                    </div>
                    <div>
                      <h4>Location</h4>
                      <label>Country:</label>
                      <Field
                        name={`experience.${index}.location.country`}
                        type="text"
                      />
                      <label>State:</label>
                      <Field
                        name={`experience.${index}.location.state`}
                        type="text"
                      />
                      <label>City:</label>
                      <Field
                        name={`experience.${index}.location.city`}
                        type="text"
                      />
                      <label>Zip Code:</label>
                      <Field
                        name={`experience.${index}.location.zipcode`}
                        type="text"
                      />
                    </div>
                    <button type="button" onClick={() => remove(index)}>
                      Remove Experience
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    push({
                      title: "",
                      company: "",
                      startDate: "",
                      endDate: "",
                      location: {
                        country: "",
                        state: "",
                        city: "",
                        zipcode: "",
                      },
                    })
                  }
                >
                  Add Experience
                </button>
              </div>
            )}
          </FieldArray>

          <h2>Education</h2>
          <FieldArray name="education">
            {({ remove, push }) => (
              <div>
                {values.education.map((_, index) => (
                  <div key={index}>
                    <h3>Education {index + 1}</h3>
                    <div>
                      <label>Institution:</label>
                      <Field
                        name={`education.${index}.institution`}
                        type="text"
                      />
                    </div>
                    <div>
                      <label>Degree:</label>
                      <Field name={`education.${index}.degree`} type="text" />
                    </div>
                    <div>
                      <label>Field Of Study:</label>
                      <Field
                        name={`education.${index}.fieldOfStudy`}
                        type="text"
                      />
                    </div>
                    <div>
                      <label>Start Date:</label>
                      <Field
                        name={`education.${index}.startDate`}
                        type="date"
                      />
                    </div>
                    <div>
                      <label>End Date:</label>
                      <Field name={`education.${index}.endDate`} type="date" />
                    </div>
                    <div>
                      <h4>Location</h4>
                      <label>Country:</label>
                      <Field
                        name={`education.${index}.location.country`}
                        type="text"
                      />
                      <label>State:</label>
                      <Field
                        name={`education.${index}.location.state`}
                        type="text"
                      />
                      <label>City:</label>
                      <Field
                        name={`education.${index}.location.city`}
                        type="text"
                      />
                      <label>Zip Code:</label>
                      <Field
                        name={`education.${index}.location.zipcode`}
                        type="text"
                      />
                    </div>
                    <div>
                      <label>Description:</label>
                      <Field
                        name={`education.${index}.description`}
                        type="text"
                      />
                    </div>
                    <button type="button" onClick={() => remove(index)}>
                      Remove Education
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    push({
                      institution: "",
                      degree: "",
                      fieldOfStudy: "",
                      startDate: "",
                      endDate: "",
                      location: {
                        country: "",
                        state: "",
                        city: "",
                        zipcode: "",
                      },
                      description: "",
                    })
                  }
                >
                  Add Education
                </button>
              </div>
            )}
          </FieldArray>

          <h2>Skills</h2>
          <div>
            <label>Skill Name:</label>
            <Field name="skills[0].name" type="text" />
          </div>
          <div>
            <label>Proficiency:</label>
            <Field as="select" name="skills[0].proficiency">
              <option value="">Select</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </Field>
          </div>

          <h2>Permissions</h2>
          <div>
            <label>Attribute:</label>
            <Field name="permissions.attribute" type="checkbox" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default UserProfileForm;
