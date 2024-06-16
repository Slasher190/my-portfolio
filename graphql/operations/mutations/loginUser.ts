import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($input: LoginInput!) {
    loginUser(input: $input) {
      ... on UserLoginSuccess {
        user {
          createdAt
          email
          id
          updatedAt
          username
        }
      }
      ... on UserInputError {
        error {
          extensions {
            code
          }
          message
        }
      }
      ... on UserNotFoundError {
        error {
          extensions {
            code
          }
          message
        }
      }
      __typename
    }
  }
`;
