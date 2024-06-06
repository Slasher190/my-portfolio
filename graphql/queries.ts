import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users {
    users {
      id
      email
      username
    }
  }
`;

export const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      email
      username
    }
  }
`;
