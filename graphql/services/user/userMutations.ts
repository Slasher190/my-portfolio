import { Context } from "@app/pages/api/graphql";
import { User } from "@prisma/client";
import {
  LoginInput,
  SignupInput,
  UserExperienceInput,
  UserProfileInput,
} from "@app/graphql/graphql";
import { CustomError } from "@app/graphql/error";
import { ErrorType } from "@app/graphql/constants/errorEnum";
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
  updateUserProfile: async (
    _parent: unknown,
    args: { input: UserProfileInput },
    context: Context
  ) => {
    const {
      firstName,
      middleName,
      lastName,
      education,
      languages,
      experience,
      permission,
      summary,
      headline,
      phoneNumber,
      skills,
      dateOfBirth,
      currentLocation,
      sex,
    } = args.input;
    try {
      const id = context.userId;
      if (!id) {
        return {
          error: {
            __typename: "UserNotFoundError",
            message: "Authentication failed or user does not exist.",
            extensions: {
              code: ErrorType.AUTHENTICATION_ERROR,
            },
          },
        };
      }
      const userProfile = await context.prisma.userProfile.create({
        data: {
          userId: id,

          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          headline: headline,
          summary: summary,
          phoneNumber: phoneNumber,
          dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
          sex: sex,
          currentLocation: currentLocation
            ? {
                create: {
                  country: currentLocation.countryId,
                  state: currentLocation.stateId,
                  city: currentLocation.cityId,
                  coordinates: currentLocation.coordinates,
                  locationType: currentLocation.locationType,
                },
              }
            : undefined,

          // Education
          education: education
            ? {
                create: education.map((edu) => ({
                  institution: edu.institution,
                  degree: edu.degree,
                  fieldOfStudy: edu.fieldOfStudy,
                  startDate: new Date(String(edu.startDate)),
                  endDate: edu.endDate ? new Date(edu.endDate) : undefined,
                  description: edu.description,
                  location: edu.location
                    ? {
                        create: {
                          country: edu.location.countryId,
                          state: edu.location.stateId,
                          city: edu.location.cityId,
                          coordinates: edu.location.coordinates,
                          locationType: edu.location.locationType,
                        },
                      }
                    : undefined,
                })),
              }
            : undefined,

          // Experience
          experience: experience
            ? {
                create: experience.map((exp) => ({
                  title: exp.title,
                  company: exp.company,
                  startDate: new Date(String(exp.startDate)),
                  endDate: exp.endDate ? new Date(exp.endDate) : undefined,
                  description: exp.description,
                  location: exp.location
                    ? {
                        create: {
                          country: exp.location.countryId,
                          state: exp.location.stateId,
                          city: exp.location.cityId,
                          coordinates: exp.location.coordinates,
                          locationType: exp.location.locationType,
                        },
                      }
                    : undefined,
                  employmentType: exp.employmentType,
                })),
              }
            : undefined,

          // Skills
          skills: skills
            ? {
                create: skills.map((skill) => ({
                  skill: {
                    connectOrCreate: {
                      where: { id: skill.skillId },
                      create: { id: skill.skillId },
                    },
                  },
                  proficiency: skill.proficiency,
                })),
              }
            : undefined,

          // Languages
          languages: languages
            ? {
                create: languages.map((lang) => ({
                  language: {
                    connectOrCreate: {
                      where: { id: lang.languageId },
                      create: { id: lang.languageId },
                    },
                  },
                  proficiency: lang.proficiency,
                })),
              }
            : undefined,

          // Permissions
          permission: permission
            ? {
                create: {
                  isEmailVisible: permission.isEmailVisible,
                  isPhoneVisible: permission.isPhoneVisible,
                  isDateOfBirthVisible: permission.isDateOfBirthVisible,
                },
              }
            : undefined,
        },
      });
      return {
        userProfile,
        __typeName: "UserProfileResponse",
      };
    } catch (error) {
      throw new CustomError(
        "Internal server error",
        ErrorType.INTERNAL_SERVER_ERROR
      );
    }
  },
  updateUserExperiences: async (
    _parent: unknown,
    args: { input: UserExperienceInput },
    context: Context
  ) => {},
};
