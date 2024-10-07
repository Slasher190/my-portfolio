import { skillMutations } from "@app/graphql/services/skills/skillMutation";
import { skillQuery } from "@app/graphql/services/skills/skillQuery";

export const skillResolvers = {
  Query: {
    ...skillQuery,
  },
  Mutation: {
    ...skillMutations,
  },
};
