import { Education } from "@app/graphql/graphql";
import { ErrorType } from "@app/graphql/constants/errorEnum";

export const educationResolvers = {
  UserEducationResult: {
    __resolveType(obj: {
      education?: Education[];
      error: {
        message?: string;
        extensions?: { code: ErrorType };
      };
    }) {
      if (obj.education) {
        return "UserEducationResponse";
      }
      if (
        obj.error.message &&
        obj.error.extensions?.code === ErrorType.VALIDATION_ERROR
      ) {
        return "EducationInputError";
      }
      return "EducationNotFoundError";
    },
  },
};
