import { gql } from "@apollo/client";

export const GET_USER_DETAILS_BY_USERNAME = gql`
  query GetUserDetailsByUsername($input: Username!) {
    getUserDetailsByUsername(input: $input) {
      ... on UserResponse {
        user {
          id
          email
          username
          createdAt
          updatedAt
          # permission {
          #   id
          #   isEmailVisible
          #   isPhoneVisible
          #   isDateOfBirthVisible
          # }
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
    }
  }
`;
