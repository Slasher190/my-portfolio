import React from "react";

interface LocationProps {
  cityName: string;
  stateName?: string;
  countryName: string;
}

const LocationComponent: React.FC<LocationProps> = ({
  cityName,
  stateName,
  countryName,
}) => {
  return (
    <p className="text-gray-500 dark:text-gray-400">
      {cityName && `${cityName}`}
      {stateName && `, ${stateName}`}
      {countryName && `, ${countryName}`}
    </p>
  );
};

export default LocationComponent;
