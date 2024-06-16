import { userQueries } from "@app/graphql/user/userQueries";
import { userMutations } from "@app/graphql/user/userMutations";
import { errorResolvers } from "@app/graphql/resolvers/errorResolvers";

export const resolvers = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
  ...errorResolvers,
};
