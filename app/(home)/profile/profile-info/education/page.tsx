"use client";
import React, { ChangeEvent } from "react";
import { educationSection } from "@app/utils/userInformationFormHelper";
import ProfileInputs from "@app/components/ConditionalInputs";

const ProfileInfo = () => {
  const { heading, fields } = educationSection;

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
        {heading}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div className="w-full" key={field.label}>
            {field.type === "text" && (
              <ProfileInputs
                label={field.label}
                type={field.type}
                name={field.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  console.log(e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            )}
            {field.type === "select" && (
              <ProfileInputs
                label={field.label}
                type={field.type}
                name={field.name}
                options={field.options}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            )}
            {field.type === "multiselect" && (
              <ProfileInputs
                label={field.label}
                type={field.type}
                name={field.name}
                options={field.options}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            )}
            {field.type === "textarea" && (
              <ProfileInputs
                label={field.label}
                type={field.type}
                name={field.name}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            )}

            {field.type === "date" && (
              <ProfileInputs
                label={field.label}
                type={field.type}
                name={field.name}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
