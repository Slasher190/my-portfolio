import { userQueries } from "@app/graphql/user/userQueries";
import { userMutations } from "@app/graphql/user/userMutations";

export const resolvers = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
};
