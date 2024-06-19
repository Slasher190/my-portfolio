// app/page.tsx
import React from "react";
import Profile from "@app/components/Home/Profile";

const Home: React.FC = () => {
  return (
    <div className="max-w-[80vw]">
      <Profile />
    </div>
  );
};

export default Home;
