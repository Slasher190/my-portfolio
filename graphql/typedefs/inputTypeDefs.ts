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

  input UserProfileInput {
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
    country: String
    state: String
    city: String
    coordinates: String
    locationType: LocationType
  }

  input UserPermissionInput {
    isEmailVisible: Boolean
    isPhoneVisible: Boolean
    isDateOfBirthVisible: Boolean
  }

  input UserExperienceInput {
    title: String
    company: String
    startDate: String
    endDate: String
    description: String
    location: LocationInput
    employmentType: EmploymentType
  }

  input UserEducationInput {
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
`;

export default inputTypeDefs;
