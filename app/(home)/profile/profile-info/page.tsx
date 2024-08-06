"use client";
import React, { ChangeEvent } from "react";
import { personalInformationSection } from "@app/utils/userInformationFormHelper";
import ProfileInputs from "@app/components/ConditionalInputs";

const ProfileInfo = () => {
  const { heading, fields } = personalInformationSection;

  return (
    <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
      <h1 className="text-2xl text-black dark:text-white col-span-1 md:col-span-2">
        {heading}
      </h1>
      {fields.map((field) => (
        <div className="col-span-1" key={field.label}>
          {field.type === "text" && (
            <ProfileInputs
              label={field.label}
              type={field.type}
              name={field.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                console.log(e.target.value)
              }
            />
          )}
          {field.type === "select" && (
            <ProfileInputs
              label={field.label}
              type={field.type}
              name={field.name}
              options={field.options}
            />
          )}
          {field.type === "multiselect" && (
            <ProfileInputs
              label={field.label}
              type={field.type}
              name={field.name}
              options={field.options}
            />
          )}
          {field.type === "textarea" && (
            <ProfileInputs
              label={field.label}
              type={field.type}
              name={field.name}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfileInfo;
