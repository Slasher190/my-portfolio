import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($input: SignupInput!) {
    createUser(input: $input) {
      id
      username
      email
      createdAt
    }
  }
`;
