"use client";
import Input from "@app/components/Ui/Input";
import { FieldType } from "@app/types/userInformationForm";
import React, { ChangeEvent } from "react";

interface ContactInput {
  heading: string;
  inputs: {
    label: string;
    name: string;
    placeHolder: string;
    type: FieldType;
  }[];
}

const ProfileInfo = () => {
  const profileData: ContactInput[] = [
    {
      heading: "Profile Info",
      inputs: [
        {
          label: "First Name",
          name: "firstName",
          placeHolder: "First Name",
          type: "text",
        },
        {
          label: "Middle Name",
          name: "middleName",
          placeHolder: "Middle Name",
          type: "text",
        },
        {
          label: "Last Name",
          name: "lastName",
          placeHolder: "Last Name",
          type: "text",
        },
        {
          label: "User Name",
          name: "userName",
          placeHolder: "User Name",
          type: "text",
        },
        {
          label: "Date Of Birth",
          name: "dateOfBirth",
          placeHolder: "DateOfBirth",
          type: "date",
        },
        {
          label: "Sex",
          name: "sex",
          placeHolder: "sex",
          type: "text",
        },
        {
          label: "Summary",
          name: "summary",
          placeHolder: "summary",
          type: "textarea",
        },
      ],
    },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
      {profileData.map((profile: ContactInput) => (
        <React.Fragment key={profile.heading}>
          <h1 className="text-2xl text-black dark:text-white col-span-1 md:col-span-2">
            {profile.heading}
          </h1>
          {profile.inputs.map((input) => (
            <div className="col-span-1" key={input.name}>
              {input.type === "text" && (
                <Input
                  type={input.type}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    console.log(e.target.value)
                  }
                  // onBlur={(e) => console.log(e.target.value)}
                  name={input.name}
                  label={input.label}
                  value="Nothing"
                  placeholder={input.placeHolder}
                />
              )}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProfileInfo;
