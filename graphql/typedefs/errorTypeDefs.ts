const errorTypeDefs = `#graphql
  type ErrorExtensions {
    code: String!
  }

  type ErrorHandler implements Error {
    message: String!
    extensions: ErrorExtensions
  }

  type UserInputError {
    error: ErrorHandler!
  }

  type UserSuspendedError {
    error: ErrorHandler!
  }

  type UserBlockedError {
    error: ErrorHandler!
  }

  type UserNotFoundError {
    error: ErrorHandler!
  }

  type UserAlreadyExistError {
    error: ErrorHandler!
  }

  type UserNotFoundError {
    error: ErrorHandler!
  }
`;

export default errorTypeDefs;
