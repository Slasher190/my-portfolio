const userTypeDefs = `#graphql
  type User {
    id: ID!
    email: String!
    username: String!
    createdAt: String!
    updatedAt: String!
    permission: Permission
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
    emailVerified: Boolean
    phoneNumberVerified: Boolean
    currentLocation: Location
    experience: [Experience!]
    education: [Education!]
    skills: [UserSkill!]
    languages: [UserLanguage!]
    sex: Sex!
  }

  type Experience {
    id: ID!
    title: String!
    company: String!
    startDate: String!
    endDate: String
    description: String!
    location: Location
    employmentType: EmploymentType!
  }

  type Education {
    id: ID!
    institution: String!
    degree: String!
    fieldOfStudy: String!
    startDate: String!
    endDate: String
    description: String
    location: Location
  }

  type Skill {
    id: ID!
    name: String!
  }

  type UserSkill {
    id: ID!
    skill: Skill!
    proficiency: Proficiency!
  }

  type Language {
    id: ID!
    name: String!
  }

  type UserLanguage {
    id: ID!
    language: Language!
    proficiency: Proficiency!
  }

  type Permission {
    id: ID!
    isEmailVisible: Boolean!
    isPhoneVisible: Boolean!
    isDateOfBirthVisible: Boolean!
  }

  type Location {
    id: ID!
    country: String!
    state: String
    city: String!
    coordinates: String
    locationType: LocationType
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

  type LanguageResponse {
    languages: [Language!]
  }

  type SkillResponse {
    skills: [Skill!]
  }

  type UserProfileResponse {
    userProfile: UserProfile!
  }

  type ExperienceResponse {
    experience: [Experience!]
  }

  type EducationResponse {
    education: [Education!]
  }

  type PermissionResponse {
    permission: Permission!
  }

  enum Proficiency {
    BEGINNER
    INTERMEDIATE
    ADVANCED
    EXPERT
  }

  enum EmploymentType {
    FULL_TIME
    PART_TIME
    SELF_EMPLOYED
    FREELANCE
    INTERNSHIP
    TRAINEE
  }

  enum LocationType {
    ON_SITE
    HYBRID
    REMOTE
  }

  enum Sex {
    MALE
    FEMALE
    OTHER
  }

  union UserRegistrationResult = UserRegistrationSuccess | UserInputError | UserAlreadyExistError
  union UserLoginResult = UserLoginSuccess | UserInputError | UserSuspendedError | UserBlockedError | UserNotFoundError
  union UserResult = UserResponse | UserNotFoundError | UserSuspendedError | UserBlockedError
  union UserProfileResult = UserProfileResponse | UserInputError | UserSuspendedError | UserBlockedError | UserNotFoundError
  union UserExperienceResult = ExperienceResponse | ExperienceNotFoundError | ExperienceInputError
  union UserEducationResult = EducationResponse | EducationNotFoundError | EducationInputError
  union UserSkillResult = SkillResponse | SkillNotFoundError | SkillInputError
  union UserLanguageResult = LanguageResponse | LanguageNotFoundError | LanguageInputError
  union UserPermissionResult = PermissionResponse | PermissionNotUpdatedError | PermissionInputError
  
  # union UserExperienceResult = 
`;

export default userTypeDefs;
