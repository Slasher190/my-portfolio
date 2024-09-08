import { userQueries, userMutations } from "@app/graphql/services/user";
import { userResolvers } from "@app/graphql/resolvers/userResolvers";
import {
  locationQuery,
  locationMutation,
} from "@app/graphql/services/locations";
import { locationResolvers } from "@app/graphql/resolvers/locationResolver";
import { educationResolvers } from "./educationResolver";
import { educationMutations } from "../services/education";

export const resolvers = {
  Query: {
    ...userQueries,
    ...locationQuery,
  },
  Mutation: {
    ...userMutations,
    ...locationMutation,
    ...educationMutations,
  },
  ...userResolvers,
  ...locationResolvers,
  ...educationResolvers,
};
