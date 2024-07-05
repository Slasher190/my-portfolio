"use client";
import React from "react";

const Profile = ({ params }: { params: { profile: string } }) => {
  const username = decodeURIComponent(params.profile);
  return <div className="text-black ml-20 text-6xl">{username}</div>;
};

export default Profile;
