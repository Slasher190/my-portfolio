const inputTypeDefs = `#graphql
  input SignupInput {
    email: String!
    username: String!
    password: String!
    confirmPassword: String!
  }

  input LoginInput {
    email: String
    username: String
    password: String!
  }

  input UserInput {
    id: ID!
  }
  
  input Username {
    username: String!
  }

  input UserProfileInput {
    id: ID
    firstName: String
    middleName: String
    lastName: String
    headline: String
    summary: String
    phoneNumber: String
    dateOfBirth: String
    sex: Sex
    currentLocation: LocationInput
    permission: UserPermissionInput
    experience: [UserExperienceInput!]
    education: [UserEducationInput!]
    skills: [UserSkillInput!]
    languages: [UserLanguageInput!]
  }

  input LocationInput {
    id: ID
    countryId: Int
    stateId: Int
    cityId: Int
    coordinates: String
    locationType: LocationType
  }

  input UserPermissionInput {
    id: ID
    isEmailVisible: Boolean
    isPhoneVisible: Boolean
    isDateOfBirthVisible: Boolean
  }

  input UserExperienceInput {
    id: ID
    userProfileId: ID
    title: String
    company: String
    startDate: String
    endDate: String
    description: String
    location: LocationInput
    employmentType: EmploymentType
  }

  input UserEducationInput {
    id: ID,
    userProfileId: ID
    institution: String
    degree: String
    fieldOfStudy: String
    startDate: String
    endDate: String
    description: String
    location: LocationInput
  }

  input SkillInput {
    name: String
  }

  input UserSkillInput {
    skillId: ID!
    proficiency: Proficiency
  }

  input LanguageInput {
    name: String
  }

  input UserLanguageInput {
    languageId: ID!
    proficiency: Proficiency
  }

  input Ids {
    ids: [ID!]
  }
  input Id {
    id: ID
  }
`;

export default inputTypeDefs;
