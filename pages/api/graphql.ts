import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { prisma } from "@app/prisma/db";
import { PrismaClient } from "@prisma/client/extension";
import { typeDefs } from "@app/graphql/schema";
import { resolvers } from "@app/graphql/resolvers";
import { CustomError } from "@app/graphql/error";
import { GraphQLError, GraphQLFormattedError } from "graphql";

export type Context = {
  prisma: PrismaClient;
};

const formatError = (
  formattedError: GraphQLFormattedError,
  error: unknown
): GraphQLFormattedError => {
  if (
    error instanceof GraphQLError &&
    error.originalError instanceof CustomError
  ) {
    const customError = error.originalError as CustomError;
    return {
      ...formattedError,
      message: customError.message,
      extensions: {
        // ...formattedError.extensions,
        code: customError.extensions.code,
      },
    };
  }
  return formattedError;
};

const apolloServer = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  formatError,
});

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});
