import { PrismaClient, Proficiency, Skill, UserSkill } from "@prisma/client";
import { GraphQLError } from "graphql";

const prisma = new PrismaClient();

interface SkillArgs {
  id: number;
  name: string;
}

interface AssignSkillArgs {
  skillId: number;
  userId: number;
  proficiency: Proficiency;
}

export const skillMutations = {
  // Create a new skill
  createSkill: async (_parent: any, args: { name: string }): Promise<Skill> => {
    try {
      const skill = await prisma.skill.create({
        data: { name: args.name },
      });
      return skill;
    } catch (error) {
      console.error("Error creating skill:", error);
      throw new GraphQLError("Failed to create skill.");
    }
  },

  // Update an existing skill
  updateSkill: async (_parent: any, args: SkillArgs): Promise<Skill> => {
    const { id, name } = args;

    try {
      const skill = await prisma.skill.update({
        where: { id },
        data: { name },
      });
      return skill;
    } catch (error: any) {
      console.error(`Error updating skill with ID ${id}:`, error);
      if (error.code === "P2025") {
        throw new GraphQLError("Skill not found.");
      }
      throw new GraphQLError("Failed to update skill.");
    }
  },

  // Delete a skill
  deleteSkill: async (_parent: any, args: { id: number }): Promise<Skill> => {
    try {
      const skill = await prisma.skill.delete({
        where: { id: args.id },
      });
      return skill;
    } catch (error: any) {
      console.error(`Error deleting skill with ID ${args.id}:`, error);
      if (error.code === "P2025") {
        throw new GraphQLError("Skill not found.");
      }
      throw new GraphQLError("Failed to delete skill.");
    }
  },

  // Assign a skill to a user
  assignSkillToUser: async (
    _parent: any,
    args: AssignSkillArgs
  ): Promise<UserSkill> => {
    try {
      const userSkill = await prisma.userSkill.create({
        data: {
          skillId: args.skillId,
          userId: args.userId,
          proficiency: args.proficiency,
        },
        include: {
          skill: true,
          user: true,
        },
      });
      return userSkill;
    } catch (error) {
      console.error(
        `Error assigning skill ${args.skillId} to user ${args.userId}:`,
        error
      );
      throw new GraphQLError("Failed to assign skill to user.");
    }
  },

  // Remove a skill from a user
  removeSkillFromUser: async (
    _parent: any,
    args: { skillId: number; userId: number }
  ): Promise<UserSkill> => {
    try {
      const userSkill = await prisma.userSkill.delete({
        where: {
          skillId_userId: {
            skillId: args.skillId,
            userId: args.userId,
          },
        },
      });
      return userSkill;
    } catch (error) {
      console.error(
        `Error removing skill ${args.skillId} from user ${args.userId}:`,
        error
      );
      throw new GraphQLError("Failed to remove skill from user.");
    }
  },
};
