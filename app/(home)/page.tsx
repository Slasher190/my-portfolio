"use client";
import About from "@app/components/Dashboard/About";
import Cover from "@app/components/Dashboard/Cover";
import ExperienceCard from "@app/components/Dashboard/ExperienceCard";
import ProfileOverview from "@app/components/Dashboard/ProfileOverview";
import RecentCard from "@app/components/Dashboard/RecentCard";
import { EmploymentType, Sex } from "@app/graphql/graphql";
import { useAppSelector } from "@app/redux/store/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);
  const [isRouting, setIsRouting] = useState(true);

  useEffect(() => {
    if (user?.username) {
      router.push(`${user.username}`);
    } else {
      router.push("/login");
    }
    setIsRouting(false);
  }, [router, user?.username]);

  if (isRouting) {
    return null;
  }

  return (
    <div className="">
      <div>
        <Cover />
      </div>
      <div className="px-4 max-w-full md:px-10">
        <ProfileOverview firstName={""} id={""} lastName={""} sex={Sex.Male} />
        <About about={""} />
        <div className="grid py-6 gap-6 grid-cols-1 md:grid-cols-3">
          {[0, 0, 0].map((e, i) => (
            <ExperienceCard
              key={i}
              company={""}
              description={""}
              employmentType={EmploymentType.Internship}
              id={""}
              startDate={""}
              title={""}
            />
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

export default Home;
