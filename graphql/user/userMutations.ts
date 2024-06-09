import { Context } from "@app/pages/api/graphql";
import { User } from "@prisma/client";
import { LoginInput, SignupInput } from "@app/graphql/graphql";

export const userMutations = {
  createUser: async (
    _parent: unknown,
    args: { input: SignupInput },
    context: Context
  ) => {
    const { email, password, username } = args.input;
    return await context.prisma.user.create({
      data: {
        email,
        password,
        username,
      },
    });
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

    if (!email && !username) {
      throw new Error("You must provide either an email or a username.");
    }

    const user = await context.prisma.user.findUnique({
      where: email ? { email } : { username },
    });

    if (!user) {
      throw new Error("User not found.");
    }

    if (user.password !== password) {
      throw new Error("Invalid password.");
    }

    return user;
  },
};
