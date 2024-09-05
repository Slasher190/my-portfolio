import {
  errorTypeDefs,
  inputTypeDefs,
  interfaceTypeDefs,
  userTypeDefs,
  statusTypeDefs,
  locationTypeDefs,
} from "@app/graphql/typedefs/indexTypeDefs";

export const typeDefs = `#graphql
  ${interfaceTypeDefs}
  ${inputTypeDefs}
  ${locationTypeDefs}
  ${statusTypeDefs}
  ${errorTypeDefs}
  ${userTypeDefs}
  type Query {
    users: [User]
    user: User
    getUserById(input: UserInput!): UserResult
    getAllSkillSet: SkillResponse
    getCountries: CountryResult
    getStatesByCountry(input: Id): StateResult
    getCitiesByState(input: Id): CityResult
  }
  type Mutation {
    createUser(input: SignupInput!): UserRegistrationResult
    deleteUser(id: ID!): User
    loginUser(input: LoginInput!): UserLoginResult

    updateUserProfile(input: UserProfileInput!): UserProfileResult
    updateUserExperiences(input: UserExperienceInput!): UserExperienceResult
    updateUserEducations(input: UserEducationInput!): UserEducationResult
    updateUserSkills(input: UserSkillInput!): UserSkillResult
    updateUserPermissions(input: UserPermissionInput!): UserPermissionResult

    addUserExperience(input: [UserExperienceInput!]): UserExperienceResult
    addUserEducation(input: [UserEducationInput!]): UserEducationResult
    addUserSkills(input: [UserSkillInput!]): UserSkillResult
    addUserLanguages(input: [UserLanguageInput!]): UserLanguageResult

    deleteUserExperience(input: Ids): OperationStatus
    deleteUserEducation(input: Ids): OperationStatus
    deleteUserSkill(input: Ids): OperationStatus
    deleteUserLanguage(input: Ids): OperationStatus

    getCountriesByIds(input: Ids): CountryResult
    getStatesByIds(input: Ids): StateResult
    getCitiesByIds(input: Ids): CityResult
  }
`;

export default typeDefs;
