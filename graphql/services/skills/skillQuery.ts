import { PrismaClient, Skill } from "@prisma/client";
import { GraphQLError } from "graphql";

const prisma = new PrismaClient();

export const skillQuery = {
  // Fetch all skills
  skills: async (): Promise<Skill[]> => {
    try {
      const skills = await prisma.skill.findMany({
        include: {
          users: {
            include: {
              user: true,
            },
          },
        },
      });
      return skills;
    } catch (error) {
      console.error("Error fetching skills:", error);
      throw new GraphQLError("Failed to fetch skills.");
    }
  },

  // Fetch a single skill by ID
  skill: async (_parent: any, args: { id: number }): Promise<Skill | null> => {
    try {
      const skill = await prisma.skill.findUnique({
        where: { id: args.id },
        include: {
          users: {
            include: {
              user: true,
            },
          },
        },
      });
      if (!skill) {
        throw new GraphQLError("Skill not found.");
      }
      return skill;
    } catch (error) {
      console.error(`Error fetching skill with ID ${args.id}:`, error);
      throw new GraphQLError("Failed to fetch skill.");
    }
  },
};
