import { Context } from "@app/app/api/graphql/route";
import { ErrorType } from "@app/graphql/constants/errorEnum";
import { CustomError } from "@app/graphql/error";
import { Username } from "@app/graphql/graphql";

export const userQueries = {
  user: async (_parent: unknown, args: { id: string }, context: Context) => {
    return await context.prisma.user.findUnique({
      where: {
        id: args.id,
      },
    });
  },

  users: async (_parent: unknown, args: unknown, context: Context) => {
    return await context.prisma.user.findMany({});
  },
  getUserDetailsByUsername: async (
    _parent: unknown,
    args: { input: Username },
    context: Context
  ) => {
    try {
      const { username } = args.input;

      if (!username) {
        return {
          // error: {
          __typename: "UserInputError",
          message: "You must provide correct username.",
          extensions: {
            code: ErrorType.USER_INPUT_ERROR,
            //  },
          },
        };
      }

      const user = await context.prisma.user.findUnique({
        where: { username },
        include: {
          profile: {
            include: {
              currentLocation: true,
              experience: {
                include: {
                  location: true,
                },
              },
              education: {
                include: {
                  location: true,
                },
              },
              skills: {
                include: {
                  skill: true,
                },
              },
              languages: {
                include: {
                  language: true,
                },
              },
            },
          },
          permission: true,
        },
      });

      if (!user) {
        return {
          // error: {
          __typename: "UserNotFoundError",
          message: "User not found.",
          extensions: {
            code: ErrorType.USER_NOT_FOUND,
            //   },
          },
        };
      }

      return {
        __typename: "UserResponse",
        user,
      };
    } catch (error) {
      throw new CustomError(
        `Internal server error: ${JSON.stringify(error)}`,
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
};
