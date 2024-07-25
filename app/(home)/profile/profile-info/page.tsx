"use client";
import Input from "@app/components/Input";
import React from "react";

interface ProfileInput {
  heading: string;
  inputs: {
    label: string;
    name: string;
    placeHolder: string;
  }[];
}

const ProfileInfo = () => {
  const profileData: ProfileInput[] = [
    {
      heading: "Heading1",
      inputs: [
        {
          label: "Account",
          name: "Account",
          placeHolder: "Account",
        },
        {
          label: "Name",
          name: "",
          placeHolder: "",
        },
        {
          label: "Skills",
          name: "",
          placeHolder: "",
        },
        {
          label: "Nothing",
          name: "",
          placeHolder: "",
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
        },
        {
          label: "Pass",
          name: "",
          placeHolder: "",
        },
        {
          label: "Key",
          name: "",
          placeHolder: "",
        },
      ],
    },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
      {profileData.map((profile: ProfileInput) => (
        <>
          <h1
            key={profile.heading}
            className="text-2xl text-black dark:text-white col-span-1 md:col-span-2"
          >
            {profile.heading}
          </h1>
          {profile.inputs.map((input, idx) => (
            <div className="col-span-1" key={idx}>
              <Input
                type="text"
                onChange={(e) => console.log(e.target.value)}
                onBlur={(e) => console.log(e.target.value)}
                name={input.name}
                label={input.label}
                value="Nothing"
                placeholder={input.placeHolder}
              />
            </div>
          ))}
        </>
      ))}
    </div>
  );
};

export default ProfileInfo;
