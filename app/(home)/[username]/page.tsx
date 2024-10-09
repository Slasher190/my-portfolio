// app/page.tsx
import About from "@app/components/Dashboard/About";
import Cover from "@app/components/Dashboard/Cover";
import ExperienceCard from "@app/components/Dashboard/ExperienceCard";
import ProfileOverview from "@app/components/Dashboard/ProfileOverview";
import RecentCard from "@app/components/Dashboard/RecentCard";
import React from "react";

interface IParams {
  params: {
    username: string;
  };
}

const User: React.FC<IParams> = ({ params }) => {
  console.log(params.username, "params");
  return (
    <div className="">
      <div>
        <Cover />
      </div>
      <div className="px-4 max-w-full md:px-10">
        <ProfileOverview />
        <About />
        <div className="grid py-6 gap-6 grid-cols-1 md:grid-cols-3">
          {[0, 0, 0].map((e, i) => (
            <ExperienceCard key={i} />
          ))}
        </div>
        <div className="py-6">
          <p className="text-[24px] font-semibold py-2">Recent Work</p>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[0, 0, 0].map((e, i) => (
              <RecentCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
