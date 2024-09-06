import { gql } from "@apollo/client";

export const GET_STATES_BY_COUNTRY = gql`
  query GetStatesByCountry($input: Id) {
    getStatesByCountry(input: $input) {
      ... on StateResponse {
        states {
          id
          name
          country_id
          country_code
          country_name
          state_code
          type
          latitude
          longitude
          __typename
        }
        __typename
      }
      ... on NotFoundError {
        error {
          extensions {
            code
          }
          message
        }
      }
    }
  }
`;
