import { Experience } from "@app/graphql/graphql";
import { convertTimestampToMonthYear } from "@app/graphql/utils/timeZone";
import React from "react";
import LocationComponent from "../Ui/LocationFormat";

const ExperienceCard: React.FC<Experience> = ({
  company,
  description,
  employmentType,
  endDate,
  startDate,
  location,
  title,
}) => {
  return (
    <div className="flex flex-col gap-3 border border-gray-400 dark:border-gray-600 rounded-[12px] p-4">
      <div className="flex gap-3 items-start">
        {/* Image or company logo */}
        <img
          className="h-[60px] w-[60px] rounded-[50%]"
          src="https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg"
          alt="UI/UX"
        />
        <div className="flex-grow">
          <p className="text-[20px] font-[500] text-gray-900 dark:text-gray-100">
            {title}
          </p>
          <p className="text-gray-400 dark:text-gray-500">{company}</p>

          {/* Employment Type */}
          {employmentType && (
            <p className="text-gray-500 text-sm dark:text-gray-400">
              {employmentType}
            </p>
          )}
        </div>
      </div>

      {/* Date range */}
      <p className="text-gray-400 dark:text-gray-500 text-[18px]">
        {`${convertTimestampToMonthYear(parseInt(startDate))} - ${
          endDate ? convertTimestampToMonthYear(parseInt(endDate)) : "Present"
        }`}
      </p>

      {/* Location */}
      {location && (
        <LocationComponent
          cityName="Indore"
          stateName="Madhya Pradesh"
          countryName="India"
        />
      )}

      {/* Description */}
      {description && (
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
          {description}
        </p>
      )}
    </div>
  );
};

export default ExperienceCard;
