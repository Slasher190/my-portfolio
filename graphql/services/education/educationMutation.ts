import { ErrorType } from "@app/graphql/constants/errorEnum";
import { CustomError } from "@app/graphql/error";
import { UserEducationInput } from "@app/graphql/graphql";
import { Context } from "@app/app/api/graphql/route";

export const educationMutations = {
  addUserEducation: async (
    _parent: unknown,
    args: { input: [UserEducationInput] },
    context: Context
  ) => {
    try {
      const userId = context.userId;
      console.log(userId);
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
        userProfileId,
      } = args.input[0];

      // Validate missing fields
      const missingFields = [];
      if (!location) missingFields.push("location");
      if (!startDate) missingFields.push("startDate");
      if (!institution) missingFields.push("institution");
      if (!degree) missingFields.push("degree");
      if (!fieldOfStudy) missingFields.push("fieldOfStudy");

      if (missingFields.length > 0) {
        return {
          error: {
            __typename: "EducationInputError",
            message: `Missing fields: ${missingFields.join(", ")}`,
            extensions: {
              code: ErrorType.VALIDATION_ERROR,
            },
          },
        };
      }

      // Handle location data
      const locationData = {
        create: {
          cityId: location?.cityId,
          stateId: location?.stateId,
          countryId: location?.countryId,
          coordinates: location?.coordinates,
          locationType: location?.locationType,
        },
      };
      // Create education entry
      const addEducation = await context.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          profile: {
            update: {
              education: {
                create: {
                  institution,
                  degree,
                  fieldOfStudy,
                  startDate: startDate ? new Date(startDate) : null,
                  endDate: endDate ? new Date(endDate) : null,
                  description,
                  location: locationData,
                },
              },
            },
          },
        },
        include: {
          profile: {
            include: {
              education: {
                include: {
                  location: true,
                },
              },
            },
          },
        },
      });
      return {
        education: addEducation.profile.education,
        __typeName: "UserEducationResponse",
      };
    } catch (error) {
      throw new CustomError(
        `Error: ${JSON.stringify(error)}`,
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
  updateUserEducations: async (
    _parent: unknown,
    args: { input: [UserEducationInput] },
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
        id,
        degree,
        description,
        endDate,
        fieldOfStudy,
        institution,
        location,
        startDate,
        userProfileId,
      } = args.input[0];

      if (!id) {
        return {
          error: {
            __typename: "EducationInputError",
            message: `Missing fields: id`,
            extensions: {
              code: ErrorType.VALIDATION_ERROR,
            },
          },
        };
      }
      const missingFields = [];
      if (!startDate) missingFields.push("startDate");
      if (!institution) missingFields.push("institution");
      if (!degree) missingFields.push("degree");
      if (!fieldOfStudy) missingFields.push("fieldOfStudy");

      if (missingFields.length > 0) {
        return {
          error: {
            __typename: "EducationInputError",
            message: `Missing fields: ${missingFields.join(", ")}`,
            extensions: {
              code: ErrorType.VALIDATION_ERROR,
            },
          },
        };
      }

      let locationData = undefined;
      if (location) {
        locationData = {
          update: {
            cityId: location.cityId,
            stateId: location.stateId,
            countryId: location.countryId,
          },
        };
      }

      const updatedEducation = await context.prisma.education.update({
        where: { id: id, userProfileId: userProfileId },
        data: {
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
        education: [updatedEducation],
        __typeName: "UserEducationResponse",
      };
    } catch (error) {
      throw new CustomError(
        `Error: ${JSON.stringify(error)}`,
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
};
