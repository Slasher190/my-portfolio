import {
  errorTypeDefs,
  inputTypeDefs,
  interfaceTypeDefs,
  userTypeDefs,
} from "@app/graphql/typedefs/indexTypeDefs";

export const typeDefs = `#graphql
  ${interfaceTypeDefs}
  ${inputTypeDefs}
  ${errorTypeDefs}
  ${userTypeDefs}
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
  }
`;

export default typeDefs;
