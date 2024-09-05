import { gql } from "@apollo/client";

export const GET_STATES_BY_COUNTRY = gql`
  mutation GetCountriesByIds($input: Ids) {
    getCountriesByIds(input: $input) {
      ... on CountryResponse {
        countries {
          id
          name
          iso3
          iso2
          numeric_code
          phone_code
          capital
          currency
          currency_name
          currency_symbol
          tld
          native
          region
          region_id
          subregion
          subregion_id
          nationality
          latitude
          longitude
          emoji
          emojiU
        }
      }
      ... on NotFoundError {
        error {
          message
          extensions {
            code
          }
        }
      }
    }
  }
`;
