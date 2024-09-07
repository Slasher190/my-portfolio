import { userQueries, userMutations } from "@app/graphql/services/user";
import { userResolvers } from "@app/graphql/resolvers/userResolvers";
import {
  locationQuery,
  locationMutation,
} from "@app/graphql/services/locations";
import { locationResolvers } from "@app/graphql/resolvers/locationResolver";
import { educationResolvers } from "./educationResolver";

export const resolvers = {
  Query: {
    ...userQueries,
    ...locationQuery,
  },
  Mutation: {
    ...userMutations,
    ...locationMutation,
  },
  ...userResolvers,
  ...locationResolvers,
  ...educationResolvers,
};
