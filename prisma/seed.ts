import { PrismaClient, Proficiency } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const skills = await prisma.skill.createMany({
    data: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "Machine Learning" },
    ],
    skipDuplicates: true,
  });

  const languages = await prisma.language.createMany({
    data: [{ name: "Hindi" }, { name: "English" }, { name: "Marathi" }],
    skipDuplicates: true,
  });
  console.log(skills, languages);
  const fetchedSkills = await prisma.skill.findMany({
    where: {
      name: {
        in: ["JavaScript", "TypeScript", "Python", "Machine Learning"],
      },
    },
  });

  const fetchedLanguages = await prisma.language.findMany({});

  const skillMap = fetchedSkills.reduce(
    (map, skill) => {
      map[skill.name] = skill.id;
      return map;
    },
    {} as Record<string, number>
  );

  const languageMap = fetchedLanguages.reduce(
    (map, skill) => {
      map[skill.name] = skill.id;
      return map;
    },
    {} as Record<string, number>
  );

  await prisma.user.create({
    data: {
      email: "admin@myportfolio.com",
      username: "admin",
      password: await bcrypt.hash("admin", 10),
      permission: {
        create: {
          isEmailVisible: true,
          isPhoneVisible: false,
          isDateOfBirthVisible: true,
        },
      },
      profile: {
        create: {
          firstName: "Admin",
          lastName: "User",
          dateOfBirth: new Date("1980-01-01"),
          sex: "FEMALE",
          currentLocation: {
            create: {
              country: 1,
              state: 1,
              city: 1,
            },
          },
          experience: {
            create: [
              {
                title: "Senior Developer",
                company: "Tech Corp",
                startDate: new Date("2015-01-01"),
                endDate: new Date("2020-01-01"),
                description:
                  "Worked on various projects as a senior developer.",
                employmentType: "FREELANCE",
                location: {
                  create: {
                    country: 1,
                    state: 1,
                    city: 1,
                  },
                },
              },
            ],
          },
          education: {
            create: [
              {
                institution: "MIT",
                degree: "BSc in Computer Science",
                fieldOfStudy: "Computer Science",
                startDate: new Date("2000-09-01"),
                endDate: new Date("2004-06-01"),
                description: "Studied computer science and engineering.",
                location: {
                  create: {
                    country: 1,
                    state: 1,
                    city: 1,
                  },
                },
              },
            ],
          },
          skills: {
            create: [
              {
                skillId: skillMap["JavaScript"],
                proficiency: Proficiency.EXPERT,
              },
              {
                skillId: skillMap["TypeScript"],
                proficiency: Proficiency.ADVANCED,
              },
            ],
          },
          languages: {
            create: [
              {
                languageId: languageMap["Hindi"],
                proficiency: "EXPERT",
              },
              {
                languageId: languageMap["English"],
                proficiency: "INTERMEDIATE",
              },
            ],
          },
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      email: "user1@myportfolio.com",
      password: await bcrypt.hash("user1password", 10),
      username: "user1",
      permission: {
        create: {
          isEmailVisible: true,
          isPhoneVisible: true,
          isDateOfBirthVisible: false,
        },
      },
      profile: {
        create: {
          firstName: "John",
          lastName: "Doe",
          dateOfBirth: new Date("1990-05-15"),
          sex: "MALE",
          currentLocation: {
            create: {
              country: 1,
              state: 1,
              city: 1,
            },
          },
          experience: {
            create: [
              {
                title: "Software Engineer",
                company: "Startup Inc.",
                startDate: new Date("2018-01-01"),
                description: "Developed full-stack applications.",
                employmentType: "FULL_TIME",
                location: {
                  create: {
                    country: 1,
                    state: 1,
                    city: 1,
                  },
                },
              },
            ],
          },
          education: {
            create: [
              {
                institution: "Stanford University",
                degree: "MSc in Computer Science",
                fieldOfStudy: "Artificial Intelligence",
                startDate: new Date("2012-09-01"),
                endDate: new Date("2014-06-01"),
                description: "Focused on AI and machine learning.",
                location: {
                  create: {
                    country: 1,
                    state: 1,
                    city: 1,
                  },
                },
              },
            ],
          },
          skills: {
            create: [
              {
                skillId: skillMap["Python"],
                proficiency: Proficiency.ADVANCED,
              },
              {
                skillId: skillMap["Machine Learning"],
                proficiency: Proficiency.INTERMEDIATE,
              },
            ],
          },
          languages: {
            create: [
              {
                languageId: languageMap["Marathi"],
                proficiency: "EXPERT",
              },
              {
                languageId: languageMap["Hindi"],
                proficiency: "ADVANCED",
              },
            ],
          },
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
