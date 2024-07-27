"use client";
import Input from "@app/components/Ui/Input";
import React from "react";

interface ProfileInput {
  heading: string;
  inputs: {
    label: string;
    name: string;
    placeHolder: string;
    type: string;
  }[];
}

const ProfileInfo = () => {
  const profileData: ProfileInput[] = [
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
          type: "Date",
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
    {
      heading: "Heading2",
      inputs: [
        {
          label: "Failed",
          name: "",
          placeHolder: "",
          type: "",
        },
      ],
    },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
      {profileData.map((profile: ProfileInput) => (
        <React.Fragment key={profile.heading}>
          <h1 className="text-2xl text-black dark:text-white col-span-1 md:col-span-2">
            {profile.heading}
          </h1>
          {profile.inputs.map((input, idx) => (
            <div className="col-span-1" key={idx}>
              <Input
                type={input.type}
                onChange={(e) => console.log(e.target.value)}
                onBlur={(e) => console.log(e.target.value)}
                name={input.name}
                label={input.label}
                value="Nothing"
                placeholder={input.placeHolder}
              />
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProfileInfo;
