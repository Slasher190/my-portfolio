import { ErrorType } from "@app/graphql/constants/errorEnum";
import { CustomError } from "@app/graphql/error";
import { Education, UserEducationInput } from "@app/graphql/graphql";
import { Context } from "@app/pages/api/graphql";

export const userMutations = {
  addUserEducation: async (
    _parent: unknown,
    args: { input: UserEducationInput },
    context: Context
  ) => {
    try {
      const userId = context.userId;
      if (!userId) {
        throw new CustomError(
          "You're not allowed to access this resource",
          ErrorType.AUTHENTICATION_ERROR
        );
      }
      const {
        degree,
        description,
        endDate,
        fieldOfStudy,
        institution,
        location,
        startDate,
      } = args.input;

      let locationData = undefined;
      if (!location) {
        return {
          error: {
            __typename: "EducationInputError",
            message: "Missing field: location",
            extensions: {
              code: ErrorType.VALIDATION_ERROR,
            },
          },
        };
      }
      if (location) {
        locationData = {
          create: {
            cityId: location.cityId,
            stateId: location.stateId,
            countryId: location.countryId,
          },
        };
      }
      if (!startDate) {
        return {
          error: {
            __typename: "EducationInputError",
            message: "Missing field: startDate",
            extensions: {
              code: ErrorType.VALIDATION_ERROR,
            },
          },
        };
      }
      if (!institution) {
        return {
          error: {
            __typename: "EducationInputError",
            message: "Missing field: institution",
            extensions: {
              code: ErrorType.VALIDATION_ERROR,
            },
          },
        };
      }
      if (!degree) {
        return {
          error: {
            __typename: "EducationInputError",
            message: "Missing field: degree",
            extensions: {
              code: ErrorType.VALIDATION_ERROR,
            },
          },
        };
      }
      if (!fieldOfStudy) {
        return {
          error: {
            __typename: "EducationInputError",
            message: "Missing field: fieldOfStudy",
            extensions: {
              code: ErrorType.VALIDATION_ERROR,
            },
          },
        };
      }
      const education: Education[] = await context.prisma.education.create({
        data: {
          userProfileId: userId,
          degree,
          description,
          endDate: endDate ? new Date(endDate) : null,
          fieldOfStudy,
          institution,
          startDate: startDate ? new Date(startDate) : null,
          location: locationData,
        },
      });
      return {
        education,
        __typeName: "UserEducationResponse",
      };
    } catch (error) {
      throw new CustomError(
        `error: ${JSON.stringify(error)}`,
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
};
