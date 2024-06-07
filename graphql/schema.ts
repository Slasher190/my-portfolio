export const typeDefs = `#graphql
  type User {
    id: ID!,
    email: String,
    username: String,
    createdAt: Date,
    updatedAt: Date,
  }
  type Query {
    users: [User]
    user: User
  }
  type Mutation {
    createUser(username: String, email: String, password: String): User
    deleteUser(id: ID!): User
  }
`;
