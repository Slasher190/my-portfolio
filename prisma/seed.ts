import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create users with their profiles, experiences, educations, skills, locations, and permissions
  await prisma.user.create({
    data: {
      email: "admin@myportfolio.com",
      password: "admin",
      username: "admin",
      profile: {
        create: {
          firstName: "Admin",
          lastName: "User",
          dateOfBirth: new Date("1980-01-01"),
          locationId: 1, // This should be a valid location ID or handled properly
          experience: {
            create: [
              {
                title: "Senior Developer",
                company: "Tech Corp",
                startDate: new Date("2015-01-01"),
                endDate: new Date("2020-01-01"),
                description:
                  "Worked on various projects as a senior developer.",
                location: {
                  create: {
                    country: "USA",
                    state: "California",
                    city: "San Francisco",
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
                    country: "USA",
                    state: "Massachusetts",
                    city: "Cambridge",
                  },
                },
              },
            ],
          },
          skills: {
            create: [
              {
                name: "JavaScript",
                proficiency: "EXPERT",
              },
              {
                name: "TypeScript",
                proficiency: "ADVANCED",
              },
            ],
          },
          permission: {
            create: {
              isEmailVisible: true,
              isPhoneVisible: false,
              isDateOfBirthVisible: true,
            },
          },
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      email: "user1@myportfolio.com",
      password: "user1password",
      username: "user1",
      profile: {
        create: {
          firstName: "John",
          lastName: "Doe",
          dateOfBirth: new Date("1990-05-15"),
          locationId: 2, // This should be a valid location ID or handled properly
          experience: {
            create: [
              {
                title: "Software Engineer",
                company: "Startup Inc.",
                startDate: new Date("2018-01-01"),
                description: "Developed full-stack applications.",
                location: {
                  create: {
                    country: "USA",
                    state: "New York",
                    city: "New York City",
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
                    country: "USA",
                    state: "California",
                    city: "Stanford",
                  },
                },
              },
            ],
          },
          skills: {
            create: [
              {
                name: "Python",
                proficiency: "ADVANCED",
              },
              {
                name: "Machine Learning",
                proficiency: "INTERMEDIATE",
              },
            ],
          },
          permission: {
            create: {
              isEmailVisible: true,
              isPhoneVisible: true,
              isDateOfBirthVisible: false,
            },
          },
        },
      },
    },
  });

  // Add more users as needed
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
