import { Context } from "@app/pages/api/graphql";
import { User } from "@prisma/client";
import {
  LoginInput,
  SignupInput,
  // UserProfileInput,
} from "@app/graphql/graphql";
import { CustomError, ErrorType } from "@app/graphql/error";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userMutations = {
  createUser: async (
    _parent: unknown,
    args: { input: SignupInput },
    context: Context
  ) => {
    const { email, password, username, confirmPassword } = args.input;
    const { res } = context;
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

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET || "kgfjlkrg2gt412g45k4g51%",
        {
          expiresIn: process.env.JWT_EXPIRATION,
        }
      );

      res.setHeader(
        "Set-Cookie",
        `token=${token}; HttpOnly; Path=/; Max-Age=${60 * 60}; SameSite=Strict; Secure=${process.env.NODE_ENV === "production"}`
      );

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
    const { res } = context;
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
          profile: {
            include: {
              currentLocation: true,
              permission: true,
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
              skills: true,
            },
          },
        },
      });
      console.log(user, "user");
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
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET || "kgfjlkrg2gt412g45k4g51%",
        {
          expiresIn: process.env.JWT_EXPIRATION,
        }
      );

      res.setHeader(
        "Set-Cookie",
        `token=${token}; HttpOnly; Path=/; Max-Age=${60 * 60}; SameSite=Strict; Secure=${process.env.NODE_ENV === "production"}`
      );

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
  // updateUserProfile: async (
  //   _parent: unknown,
  //   args: { input: UserProfileInput },
  //   context: Context
  // ) => {
  //   const {
  //     firstName,
  //     middleName,
  //     lastName,
  //     education,
  //     experience,
  //     permission,
  //     summary,
  //     headline,
  //     phoneNumber,
  //     skills,
  //     dateOfBirth,
  //     currentLocation,
  //   } = args.input;
  //   const id = context.userId;
  //   if (!id) {

  //   }
  // },
};
