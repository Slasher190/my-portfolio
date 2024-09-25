import { userQueries, userMutations } from "@app/graphql/services/user";
import { userResolvers } from "@app/graphql/resolvers/userResolvers";
import {
  locationQuery,
  locationMutation,
} from "@app/graphql/services/locations";
import { locationResolvers } from "@app/graphql/resolvers/locationResolver";
import { educationResolvers } from "./educationResolver";
import { experienceResolvers } from "./experienceResolver";
import { educationMutations } from "../services/education";
import { experienceMutations, experienceQueries } from "../services/experience";

export const resolvers = {
  Query: {
    ...userQueries,
    ...locationQuery,
    ...experienceQueries,
  },
  Mutation: {
    ...userMutations,
    ...locationMutation,
    ...educationMutations,
    ...experienceMutations,
  },
  ...userResolvers,
  ...locationResolvers,
  ...educationResolvers,
  ...experienceResolvers,
};
