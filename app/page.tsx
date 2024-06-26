// app/page.tsx
import React from "react";
import Profile from "@app/components/Home/Profile";

const Home: React.FC = () => {
  return (
    <div className="max-w-[75vw]">
      <Profile cover_image={""} />
    </div>
  );
};

export default Home;
