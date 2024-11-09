import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { prisma } from "@app/prisma/db";
import { PrismaClient } from "@prisma/client/extension";
import { typeDefs } from "@app/graphql/schema";
import { resolvers } from "@app/graphql/resolvers";
import { CustomError } from "@app/graphql/error";
import { GraphQLError, GraphQLFormattedError } from "graphql";
import { verifyToken } from "@app/utils/tokenUtils"; // Updated to work with NextRequest
import { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import Keyv from "keyv";
import KeyvRedis from "@keyv/redis";

export type Context = {
  prisma: PrismaClient;
  req: NextRequest;
  userId?: string | number | JwtPayload;
  cache: Keyv;
};

const formatError = (
  formattedError: GraphQLFormattedError,
  error: unknown
): GraphQLFormattedError => {
  if (
    error instanceof GraphQLError &&
    error.originalError instanceof CustomError
  ) {
    const customError = error.originalError;
    return {
      ...formattedError,
      message: customError.message,
      extensions: {
        code: customError.extensions.code,
      },
    };
  }
  return formattedError;
};

const keyv = new Keyv({
  store: new KeyvRedis("redis://localhost:6379"),
});
const apolloServer = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  formatError,
  cache: new KeyvAdapter(keyv),
  persistedQueries: {
    ttl: 900, // 15 minutes
  },
});

keyv.on("error", (err) => console.error("Redis connection error:", err));

(async function testRedisConnection() {
  try {
    await keyv.set("testKey", { message: "Redis connection successful!" });
    console.log("Data saved to Redis: testKey");

    const testData = await keyv.get("testKey");
    console.log("Retrieved from Redis:", testData);
  } catch (err) {
    console.error("Error interacting with Redis:", err);
  }
})();

// Context function adjusted for App Router
const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req: NextRequest) => {
    const { user: userId } = verifyToken(req);
    return { req, prisma, userId: userId ?? undefined, cache: keyv };
  },
});

export const GET = handler;
export const POST = handler;
