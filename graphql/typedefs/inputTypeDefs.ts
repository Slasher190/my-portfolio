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
    currentLocation: LocationInput
    permission: PermissionInput
    experience: [ExperienceInput!]
    education: [EducationInput!]
    skills: [SkillInput!]
  }

  input LocationInput {
    country: String
    state: String
    city: String
    coordinates: String
  }

  input PermissionInput {
    isEmailVisible: Boolean
    isPhoneVisible: Boolean
    isDateOfBirthVisible: Boolean
  }

  input ExperienceInput {
    title: String
    company: String
    startDate: String
    endDate: String
    description: String
    location: LocationInput
  }

  input EducationInput {
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
    proficiency: Proficiency
  }

`;

export default inputTypeDefs;
