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
`;

export default inputTypeDefs;
