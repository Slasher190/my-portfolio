import NextAuth, { AuthOptions, DefaultSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { gql, GraphQLClient } from "graphql-request";
import { graphqlAdapter } from "@app/utils/graphqlAdaptor";

// Define the user type from GraphQL query
interface User {
  id: string;
  username: string;
  password: string;
}

// Initialize the GraphQL client
const client = new GraphQLClient("https://your-graphql-endpoint.com", {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHQL_API_KEY}`,
  },
});

// Extend the default session and JWT types within the same file
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
  }
}

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          throw new Error("Username and password are required.");
        }

        // Query the user by username from your GraphQL API
        const query = gql`
          query GetUserByUsername($username: String!) {
            user(username: $username) {
              id
              username
              password
            }
          }
        `;

        const variables = { username: credentials.username };
        const data = await client.request<{ user: User }>(query, variables);

        if (!data?.user) {
          throw new Error("No user found with the provided username.");
        }

        // Compare the provided password with the stored hashed password
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          data.user.password
        );

        if (!isValidPassword) {
          throw new Error("Invalid password.");
        }

        // Return the user object if authentication is successful
        return { id: data.user.id, name: data.user.username };
      },
    }),
  ],
  adapter: graphqlAdapter,
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
