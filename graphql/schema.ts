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
  input LoginInput {
    email: String
    username: String
    password: String!
  }
  type Mutation {
    createUser(username: String, email: String, password: String): User
    deleteUser(id: ID!): User
    loginUser(input: LoginInput!): User
  }
`;

export default typeDefs;
