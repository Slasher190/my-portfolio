import { ErrorType } from "@app/graphql/constants/errorEnum";
import { CustomError } from "@app/graphql/error";
import { Context } from "@app/app/api/graphql/route";
import { Id } from "@app/graphql/graphql";

export const experienceQueries = {
  getUserExperiences: async (
    _parent: unknown,
    args: { input: Id },
    context: Context
  ) => {
    try {
      const { id } = args.input;
      if (!id) {
        return {
          error: {
            __typename: "ExperienceInputError",
            message: "User ID is required to fetch experiences",
            extensions: {
              code: ErrorType.VALIDATION_ERROR,
            },
          },
        };
      }

      const userProfile = await context.prisma.user.findUnique({
        where: {
          id: parseInt(id),
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

      if (!userProfile?.profile) {
        return {
          error: {
            __typename: "ExperienceNotFoundError",
            message: "User profile not found",
            extensions: {
              code: ErrorType.NOT_FOUND_ERROR,
            },
          },
        };
      }

      return {
        experience: userProfile.profile.experience,
        error: null,
      };
    } catch (error) {
      throw new CustomError(
        `Error: ${JSON.stringify(error)}`,
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
};
