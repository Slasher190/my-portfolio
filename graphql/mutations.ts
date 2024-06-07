import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($email: String, $username: String, $password: String) {
    createUser(email: $email, username: $username, password: $password) {
      id
      username
      email
      createdAt
    }
  }
`;
