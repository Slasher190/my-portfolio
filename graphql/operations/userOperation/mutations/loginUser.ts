import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($input: LoginInput!) {
    loginUser(input: $input) {
      ... on UserLoginSuccess {
        user {
          createdAt
          id
          updatedAt
          username
          email
          profile {
            id
            headline
            firstName
            __typename
            experience {
              id
              description
              company
              location {
                coordinates
                city
                id
                country
                state
                __typename
              }
              endDate
              startDate
              title
              __typename
            }
            education {
              id
              institution
              degree
              fieldOfStudy
              startDate
              endDate
              description
              location {
                id
                coordinates
                country
                state
                __typename
              }
              __typename
            }
            dateOfBirth
            currentLocation {
              id
              country
              state
              city
              coordinates
              __typename
            }
            lastName
            middleName
            permission {
              id
              isEmailVisible
              isPhoneVisible
              isDateOfBirthVisible
              __typename
            }
            phoneNumber
            skills {
              id
              name
              proficiency
              __typename
            }
            summary
          }
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
