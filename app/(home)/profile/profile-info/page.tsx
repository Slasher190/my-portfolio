"use client";
import Input from "@app/components/Input";
import React from "react";

const ProfileInfo = () => {
  return (
    <div>
      <Input
        type="text"
        onChange={(e) => console.log(e.target.value)}
        label="Account"
        value="Nothing"
        placeholder="testing"
      />
    </div>
  );
};

export default ProfileInfo;
