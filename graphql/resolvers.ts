import { Context } from "@app/pages/api/graphql";
import { User } from "@prisma/client";

export const resolvers = {
  Query: {
    user: async (_parent: unknown, args: { id: string }, context: Context) => {
      await context.prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
    },

    users: async (_parent: unknown, args: unknown, content: Context) => {
      await content.prisma.user.findMany({});
    },
  },
  Mutation: {
    createUser: async (_parent: unknown, args: User, content: Context) => {
      await content.prisma.user.create({
        data: {
          email: args.email,
          password: args.password,
          username: args.username,
        },
      });
    },
    deleteUser: async (_parent: unknown, args: User, content: Context) => {
      await content.prisma.user.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};
