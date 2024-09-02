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

  type ExperienceNotFoundError {
    error: ErrorHandler!
  }

  type EducationNotFoundError {
    error: ErrorHandler!
  }

  type SkillNotFoundError {
    error: ErrorHandler!
  }

  type LanguageNotFoundError {
    error: ErrorHandler!
  }

  type ExperienceInputError {
    error: ErrorHandler!
  }

  type EducationInputError {
    error: ErrorHandler!
  }

  type SkillInputError {
    error: ErrorHandler!
  }

  type LanguageInputError {
    error: ErrorHandler!
  }

  type PermissionInputError {
    error: ErrorHandler!
  }

  type PermissionNotUpdatedError {
    error: ErrorHandler!
  }

  type NotFoundError {
    error: ErrorHandler!
  }
`;

export default errorTypeDefs;
