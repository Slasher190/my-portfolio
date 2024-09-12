import { User } from "@app/graphql/graphql";
import { ErrorType } from "@app/graphql/constants/errorEnum";

export const userResolvers = {
  UserRegistrationResult: {
    __resolveType(obj: {
      user?: User;
      error: {
        message?: string;
        extensions?: { code: ErrorType };
      };
    }) {
      if (obj.user) {
        return "UserRegistrationSuccess";
      }
      if (obj.error?.message) {
        switch (obj.error.extensions?.code) {
          case ErrorType.USER_INPUT_ERROR:
            return "UserInputError";
          case ErrorType.AUTHENTICATION_ERROR:
            return "UserAlreadyExistError";
          default:
            return null;
        }
      }
      return null;
    },
  },
  UserLoginResult: {
    __resolveType(obj: {
      user?: User;
      error: {
        message?: string;
        extensions?: { code: ErrorType };
      };
    }) {
      console.log(obj);
      if (obj.user) {
        return "UserLoginSuccess";
      }
      if (obj.error?.message) {
        switch (obj.error.extensions?.code) {
          case ErrorType.USER_INPUT_ERROR:
            return "UserInputError";
          case ErrorType.USER_SUSPENDED:
            return "UserSuspendedError";
          case ErrorType.USER_BLOCKED:
            return "UserBlockedError";
          case ErrorType.USER_NOT_FOUND:
          case ErrorType.AUTHENTICATION_ERROR:
            return "UserNotFoundError";
          default:
            return "UserInputError";
        }
      }
      return null;
    },
  },
};
