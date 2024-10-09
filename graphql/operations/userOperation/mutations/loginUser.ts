import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($input: LoginInput!) {
    loginUser(input: $input) {
      ... on UserLoginSuccess {
        user {
          id
          email
          username
          createdAt
          updatedAt
          permission {
            id
            isEmailVisible
            isPhoneVisible
            isDateOfBirthVisible
          }
          profile {
            id
            firstName
            middleName
            lastName
            headline
            summary
            phoneNumber
            dateOfBirth
            emailVerified
            phoneNumberVerified
            currentLocation {
              id
              countryId
              stateId
              cityId
              coordinates
              locationType
            }
            experience {
              id
              title
              company
              startDate
              endDate
              description
              location {
                id
                countryId
                stateId
                cityId
                coordinates
                locationType
              }
              employmentType
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
                countryId
                stateId
                cityId
                coordinates
                locationType
              }
            }
            skills {
              id
              skill {
                id
                name
              }
              proficiency
            }
            languages {
              id
              language {
                id
                name
              }
              proficiency
            }
            sex
          }
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
      ... on UserSuspendedError {
        error {
          message
          extensions {
            code
          }
        }
      }
      ... on UserBlockedError {
        error {
          message
          extensions {
            code
          }
        }
      }
      ... on UserNotFoundError {
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
