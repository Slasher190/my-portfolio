const userTypeDefs = `#graphql
  type User {
    id: ID!
    email: String!
    username: String!
    createdAt: String!
    updatedAt: String!
    profile: UserProfile
  }

  type UserProfile {
    id: ID!
    firstName: String!
    middleName: String
    lastName: String!
    headline: String
    summary: String
    phoneNumber: String
    dateOfBirth: String
    currentLocation: Location
    permission: Permission
    experience: [Experience!]
    education: [Education!]
    skills: [Skill!]
  }

  type Experience {
    id: ID!
    title: String!
    company: String!
    startDate: String!
    endDate: String
    description: String!
    location: Location!
  }

  type Education {
    id: ID!
    institution: String
    degree: String
    fieldOfStudy: String
    startDate: String!
    endDate: String
    description: String
    location: Location
  }

  type Skill {
    id: ID!
    name: String!
    proficiency: Proficiency
  }

  type Permission {
    id: ID!
    isEmailVisible: Boolean
    isPhoneVisible: Boolean
    isDateOfBirthVisible: Boolean
  }

  enum Proficiency {
    BEGINNER
    INTERMEDIATE
    ADVANCED
    EXPERT
  }

  type Location {
    id: ID!
    country: String!
    state: String
    city: String!
    coordinates: String
  }

  type UserRegistrationSuccess {
    user: User!
  }

  type UserLoginSuccess {
    user: User!
  }

  type UserResponse {
    user: User!
  }

  type SkillResponse {
    skills: [Skill!]
  }

  type UserProfileResponse {
    userProfile: UserProfile!
  }
  
  union UserRegistrationResult = UserRegistrationSuccess | UserInputError | UserAlreadyExistError
  union UserLoginResult = UserLoginSuccess | UserInputError | UserSuspendedError | UserBlockedError | UserNotFoundError
  union UserResult = UserResponse | UserNotFoundError | UserSuspendedError | UserBlockedError
  union UserProfileResult = UserProfileResponse | UserInputError | UserSuspendedError | UserBlockedError | UserNotFoundError
`;

export default userTypeDefs;
