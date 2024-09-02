import { userQueries } from "@app/graphql/services/user/userQueries";
import { userMutations } from "@app/graphql/services/user/userMutations";
import { errorResolvers } from "@app/graphql/resolvers/errorResolvers";
import { locationQuery } from "@app/graphql/services/locations/locationQuery";

export const resolvers = {
  Query: {
    ...userQueries,
    ...locationQuery,
  },
  Mutation: {
    ...userMutations,
  },
  ...errorResolvers,
};
