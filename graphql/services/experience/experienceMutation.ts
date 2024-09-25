import { ErrorType } from "@app/graphql/constants/errorEnum";
import { CustomError } from "@app/graphql/error";
import { Ids, UserExperienceInput } from "@app/graphql/graphql";
import { Context } from "@app/app/api/graphql/route";
import { Experience } from "@prisma/client";

export const experienceMutations = {
  addUserExperience: async (
    _parent: unknown,
    args: { input: UserExperienceInput[] },
    context: Context
  ) => {
    try {
      const userId = context.userId;
      if (!userId) {
        return {
          __typename: "Failure",
          message: "You're not allowed to access this resource",
          success: false,
        };
      }

      const input = args.input[0];
      const {
        title,
        company,
        startDate,
        endDate,
        description,
        location,
        employmentType,
      } = input;

      const missingFields = [];
      if (!title) missingFields.push("title");
      if (!company) missingFields.push("company");
      if (!startDate) missingFields.push("startDate");
      if (!endDate) missingFields.push("endDate");
      if (!description) missingFields.push("description");
      if (!location) missingFields.push("location");
      if (!employmentType) missingFields.push("employmentType");

      if (missingFields.length > 0) {
        return {
          error: {
            __typename: "ExperienceInputError",
            message: `Missing fields: ${missingFields.join(", ")}`,
            extensions: {
              code: ErrorType.VALIDATION_ERROR,
            },
          },
        };
      }

      const locationData = location
        ? {
            create: {
              cityId: location.cityId,
              stateId: location.stateId,
              countryId: location.countryId,
              coordinates: location.coordinates,
              locationType: location.locationType,
            },
          }
        : undefined;

      const addExperience = await context.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          profile: {
            update: {
              experience: {
                create: {
                  title,
                  company,
                  startDate: startDate ? new Date(startDate) : null,
                  endDate: endDate ? new Date(endDate) : null,
                  description,
                  location: locationData,
                  employmentType,
                },
              },
            },
          },
        },
        include: {
          profile: {
            include: {
              experience: {
                include: {
                  location: true,
                },
              },
            },
          },
        },
      });

      return {
        experience: addExperience.profile.experience,
        __typename: "UserExperienceResponse",
      };
    } catch (error) {
      throw new CustomError(
        `Error: ${JSON.stringify(error)}`,
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },

  updateUserExperiences: async (
    _parent: unknown,
    args: { input: UserExperienceInput },
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
        title,
        company,
        startDate,
        endDate,
        description,
        location,
        employmentType,
      } = args.input;

      if (!id) {
        return {
          error: {
            __typename: "ExperienceInputError",
            message: "Missing field: id",
            extensions: {
              code: ErrorType.VALIDATION_ERROR,
            },
          },
        };
      }

      const missingFields = [];
      if (!startDate) missingFields.push("startDate");
      if (!description) missingFields.push("description");
      if (!title) missingFields.push("title");
      if (!company) missingFields.push("company");

      if (missingFields.length > 0) {
        return {
          error: {
            __typename: "ExperienceInputError",
            message: `Missing fields: ${missingFields.join(", ")}`,
            extensions: {
              code: ErrorType.VALIDATION_ERROR,
            },
          },
        };
      }

      const locationData = location
        ? {
            update: {
              cityId: location.cityId,
              stateId: location.stateId,
              countryId: location.countryId,
              coordinates: location.coordinates,
              locationType: location.locationType,
            },
          }
        : undefined;

      const experienceExists = await context.prisma.user.findFirst({
        where: {
          id: userId,
          profile: {
            experience: {
              some: {
                id: parseInt(id), // Ensure id is properly parsed as an integer
              },
            },
          },
        },
      });

      if (!experienceExists) {
        return {
          error: {
            __typename: "ExperienceInputError",
            message: "Experience not found or not associated with this user",
            extensions: {
              code: ErrorType.VALIDATION_ERROR,
            },
          },
        };
      }

      const updatedExperience = await context.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          profile: {
            update: {
              experience: {
                update: {
                  where: {
                    id: parseInt(id),
                  },
                  data: {
                    title,
                    company,
                    startDate: startDate ? new Date(startDate) : null,
                    endDate: endDate ? new Date(endDate) : null,
                    description,
                    location: locationData,
                    employmentType,
                  },
                },
              },
            },
          },
        },
        include: {
          profile: {
            include: {
              experience: {
                include: {
                  location: true,
                },
              },
            },
          },
        },
      });

      console.log("Hello");

      return {
        experience: updatedExperience.profile.experience,
        __typename: "UserExperienceResponse",
      };
    } catch (error) {
      throw new CustomError(
        `Error: ${JSON.stringify(error)}`,
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
  deleteUserExperience: async (
    _parent: unknown,
    args: { input: Ids },
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

      if (!args?.input?.ids?.length) {
        return {
          __typename: "NotFound",
          message: "This id is not correct",
          success: false,
        };
      }

      const experienceId = parseInt(args.input.ids[0], 10);

      if (isNaN(experienceId)) {
        return {
          __typename: "NotFound",
          message: "This experienceId not Found",
          success: true,
        };
      }
      const userWithProfile = await context.prisma.user.findUnique({
        where: { id: userId },
        include: {
          profile: {
            include: {
              experience: true,
            },
          },
        },
      });

      if (!userWithProfile) {
        return {
          __typename: "NotFound",
          message: "This User with Profile not found",
          success: false,
        };
      }

      const experience = userWithProfile.profile.experience.find(
        (exp: Experience) => exp.id === experienceId
      );

      if (!experience) {
        return {
          __typename: "NotFound",
          message: "This experience is not found ",
          success: false,
        };
      }
      await context.prisma.experience.delete({
        where: {
          id: experienceId,
        },
      });

      return {
        __typename: "Successful",
        message: "This experience is deleted successfully ",
        success: true,
      };
    } catch (error) {
      console.error("Error details:", error);
      throw new CustomError(
        `Error: ${JSON.stringify(error)}`,
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
};
