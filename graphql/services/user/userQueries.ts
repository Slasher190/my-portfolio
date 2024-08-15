import { Context } from "@app/pages/api/graphql";

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
};
