import { Experience } from "@app/graphql/graphql";
import { ErrorType } from "@app/graphql/constants/errorEnum";

export const experienceResolvers = {
  UserExperienceResult: {
    __resolveType(obj: {
      experience?: Experience[];
      error: {
        message?: string;
        extensions?: { code: ErrorType };
      };
    }) {
      if (obj.experience) {
        return "UserExperienceResponse";
      }
      if (
        obj.error.message &&
        obj.error.extensions?.code === ErrorType.VALIDATION_ERROR
      ) {
        return "ExperienceInputError";
      }
      return "ExperienceNotFoundError";
    },
  },
  OperationStatus: {
    __resolveType(obj: { success: boolean; __typename?: string }) {
      if (obj.__typename) {
        return obj.__typename;
      }
      return obj.success ? "Successful" : "Failure";
    },
  },
};
