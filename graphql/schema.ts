export const typeDefs = `#graphql
  type User {
    id: ID!,
    email: String,
    username: String,
    createdAt: String,
    updatedAt: String,
  }
  type Query {
    users: [User]
    user: User
  }
  input SignupInput {
    email: String!
    username: String!
    password: String!
    confirmPassword: String
  }
  input LoginInput {
    email: String
    username: String
    password: String!
  }
  type Mutation {
    createUser(input: SignupInput!): User
    deleteUser(id: ID!): User
    loginUser(input: LoginInput!): User
  }
`;

export default typeDefs;
