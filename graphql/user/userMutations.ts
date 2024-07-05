import { Context } from "@app/pages/api/graphql";
import { User } from "@prisma/client";
import { LoginInput, SignupInput } from "@app/graphql/graphql";
import { CustomError, ErrorType } from "@app/graphql/error";
import bcrypt from "bcrypt";

export const userMutations = {
  createUser: async (
    _parent: unknown,
    args: { input: SignupInput },
    context: Context
  ) => {
    const { email, password, username, confirmPassword } = args.input;
    try {
      if (!email && !username) {
        return {
          error: {
            __typename: "UserInputError",
            message: "You must provide either an email or a username.",
            extensions: {
              code: ErrorType.USER_INPUT_ERROR,
            },
          },
        };
      }

      if (password !== confirmPassword) {
        return {
          error: {
            __typename: "UserInputError",
            message: "Passwords do not match",
            extensions: {
              code: ErrorType.USER_INPUT_ERROR,
            },
          },
        };
      }

      const isAvailable = await context.prisma.user.findUnique({
        where: email ? { email } : { username },
      });

      if (isAvailable) {
        return {
          error: {
            __typename: "UserAlreadyExistError",
            message: "User already exists",
            extensions: {
              code: ErrorType.USER_INPUT_ERROR,
            },
          },
        };
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await context.prisma.user.create({
        data: { email, username, password: hashedPassword },
      });

      return {
        __typename: "UserRegistrationSuccess",
        user,
      };
    } catch (error) {
      throw new CustomError(
        "Internal server error",
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
  deleteUser: async (_parent: unknown, args: User, context: Context) => {
    return await context.prisma.user.delete({
      where: {
        id: args.id,
      },
    });
  },
  loginUser: async (
    _parent: unknown,
    args: { input: LoginInput },
    context: Context
  ) => {
    const { email, username, password } = args.input;
    try {
      if (!email && !username) {
        return {
          error: {
            __typename: "UserInputError",
            message: "You must provide either an email or a username.",
            extensions: {
              code: ErrorType.USER_INPUT_ERROR,
            },
          },
        };
      }

      const user = await context.prisma.user.findUnique({
        where: email ? { email } : { username },
        include: {
          profile: true,
        },
      });

      if (!user) {
        return {
          error: {
            __typename: "UserNotFoundError",
            message: "User not found.",
            extensions: {
              code: ErrorType.USER_NOT_FOUND,
            },
          },
        };
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return {
          error: {
            __typename: "UserNotFoundError",
            message: "Either email or password is wrong.",
            extensions: {
              code: ErrorType.AUTHENTICATION_ERROR,
            },
          },
        };
      }
      // Feature will added in future
      // if (user.suspended) {
      //   throw new CustomError("User is suspended.", ErrorType.USER_SUSPENDED);
      // }

      // if (user.blocked) {
      //   throw new CustomError("User is blocked.", ErrorType.USER_BLOCKED);
      // }

      return {
        __typename: "UserLoginSuccess",
        user,
      };
    } catch (error) {
      throw new CustomError(
        "Internal server error",
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
};
