import { gql } from "@apollo/client";

export const GET_STATES_BY_IDS = gql`
  mutation GetStatesByIds($input: Ids) {
    getStatesByIds(input: $input) {
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
          __typeName
        }
        __typeName
      }
    }
  }
`;
