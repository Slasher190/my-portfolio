// app/page.tsx
"use client";
import { useQuery } from "@apollo/client";
import About from "@app/components/Dashboard/About";
import Cover from "@app/components/Dashboard/Cover";
import ExperienceCard from "@app/components/Dashboard/ExperienceCard";
import ProfileOverview from "@app/components/Dashboard/ProfileOverview";
import RecentCard from "@app/components/Dashboard/RecentCard";
import {
  Experience,
  Sex,
  UserPageResult,
  UserProfile,
} from "@app/graphql/graphql";
import { GET_USER_DETAILS_BY_USERNAME } from "@app/graphql/operations/userOperation/queries/getUserDetailsByUsername";
import {
  userMutationError,
  userMutationSuccess,
} from "@app/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@app/redux/store/hooks";
import React, { useEffect } from "react";

interface IParams {
  params: {
    username: string;
  };
}

const User: React.FC<IParams> = ({ params }) => {
  const { user } = useAppSelector((state) => state.user);
  const profile: UserProfile | undefined | null = user?.profile;
  const dispatch = useAppDispatch();
  const { data, loading, error } = useQuery<{
    getUserDetailsByUsername: UserPageResult;
  }>(GET_USER_DETAILS_BY_USERNAME, {
    variables: {
      input: {
        username: params.username,
      },
    },
  });

  useEffect(() => {
    if (loading) {
      return;
    }

    if (error) {
      console.error("Error fetching user details:", error);
      return;
    }

    if (data) {
      const result = data.getUserDetailsByUsername;

      if (result.__typename === "UserResponse") {
        dispatch(userMutationSuccess(result));
      } else if (
        result.__typename === "UserNotFoundError" ||
        result.__typename === "UserBlockedError" ||
        result.__typename === "UserSuspendedError"
      ) {
        dispatch(userMutationError(result));
      } else {
        console.warn("Unhandled response type", result.__typename);
      }
    }
  }, [dispatch, data, loading, error]);

  return (
    <div className="">
      <div>
        <Cover />
      </div>
      <div className="px-4 max-w-full md:px-10">
        <ProfileOverview
          firstName={profile?.firstName ?? ""}
          middleName={profile?.middleName ?? ""}
          lastName={profile?.lastName ?? ""}
          headline={profile?.headline ?? ""}
          id={profile?.id ?? ""}
          sex={profile?.sex ?? Sex.Male}
        />
        <About about={profile?.summary ?? ""} />
        <div className="grid py-6 gap-6 grid-cols-1 md:grid-cols-3">
          {profile &&
            profile.experience &&
            profile.experience.map(
              (
                {
                  company,
                  description,
                  employmentType,
                  endDate,
                  startDate,
                  location,
                  title,
                  id,
                }: Experience,
                i: React.Key | null | undefined
              ) => (
                <ExperienceCard
                  company={company}
                  description={description}
                  employmentType={employmentType}
                  endDate={endDate}
                  startDate={startDate}
                  location={location}
                  title={title}
                  key={i}
                  id={id}
                />
              )
            )}
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
