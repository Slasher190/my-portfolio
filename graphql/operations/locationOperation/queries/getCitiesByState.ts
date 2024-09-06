import { gql } from "@apollo/client";

export const GET_CITIES_BY_STATE = gql`
  query GetCitiesByState($input: Id) {
    getCitiesByState(input: $input) {
      ... on CityResponse {
        cities {
          id
          name
          state_id
          state_code
          state_name
          country_id
          country_code
          country_name
          latitude
          longitude
          wikiDataId
          __typeName
        }
        __typeName
      }
    }
  }
`;
