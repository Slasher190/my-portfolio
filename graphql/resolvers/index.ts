import { userQueries } from "@app/graphql/services/user/userQueries";
import { userMutations } from "@app/graphql/services/user/userMutations";
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
