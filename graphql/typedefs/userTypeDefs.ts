const userTypeDefs = `#graphql
  type User {
    id: ID!
    email: String!
    username: String!
    createdAt: String!
    updatedAt: String!
  }

  type UserRegistrationSuccess {
    user: User!
  }

  type UserLoginSuccess {
    user: User!
  }
  
  union UserRegistrationResult = UserRegistrationSuccess | UserInputError | UserAlreadyExistError
  union UserLoginResult = UserLoginSuccess | UserInputError | UserSuspendedError | UserBlockedError | UserNotFoundError
  union UserResult = User | UserNotFoundError | UserSuspendedError | UserBlockedError
`;

export default userTypeDefs;
