import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation SignupUser($input: SignupInput!) {
    createUser(input: $input) {
      ... on UserRegistrationSuccess {
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
          message
          extensions {
            code
          }
        }
      }
      ... on UserAlreadyExistError {
        error {
          message
          extensions {
            code
          }
        }
      }
      __typename
    }
  }
`;
