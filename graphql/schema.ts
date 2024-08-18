import {
  errorTypeDefs,
  inputTypeDefs,
  interfaceTypeDefs,
  userTypeDefs,
  statusTypeDefs,
} from "@app/graphql/typedefs/indexTypeDefs";

export const typeDefs = `#graphql
  ${interfaceTypeDefs}
  ${inputTypeDefs}
  ${errorTypeDefs}
  ${userTypeDefs}
  ${statusTypeDefs}
  type Query {
    users: [User]
    user: User
    getUserById(input: UserInput!): UserResult
    getAllSkillSet: SkillResponse
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
  }
`;

export default typeDefs;
