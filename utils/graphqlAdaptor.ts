import { Adapter, AdapterUser } from "next-auth/adapters";
import { gql, GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://your-graphql-endpoint.com", {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHQL_API_KEY}`,
  },
});

export const graphqlAdapter: Adapter = {
  async getUser(id: string): Promise<AdapterUser | null> {
    const query = gql`
      query GetUser($id: ID!) {
        user(id: $id) {
          id
          username
          email
        }
      }
    `;
    const { user } = await client.request<{
      user: { id: string; username: string; email: string } | null;
    }>(query, { id });

    if (!user) return null;

    return {
      id: user.id,
      name: user.username,
      email: user.email,
      emailVerified: null, // Add this property if email verification is used
      image: null, // Add this property if the user has a profile image
    } as AdapterUser;
  },

  async getUserByEmail(email: string): Promise<AdapterUser | null> {
    const query = gql`
      query GetUserByEmail($email: String!) {
        user(email: $email) {
          id
          username
          email
        }
      }
    `;
    const { user } = await client.request<{
      user: { id: string; username: string; email: string } | null;
    }>(query, { email });

    if (!user) return null;

    return {
      id: user.id,
      name: user.username,
      email: user.email,
      emailVerified: null, // Add this property if email verification is used
      image: null, // Add this property if the user has a profile image
    } as AdapterUser;
  },

  async createUser(user: Partial<AdapterUser>): Promise<AdapterUser> {
    const mutation = gql`
      mutation CreateUser(
        $username: String!
        $email: String!
        $password: String!
      ) {
        createUser(
          data: { username: $username, email: $email, password: $password }
        ) {
          id
          username
          email
        }
      }
    `;
    const { createUser } = await client.request<{
      createUser: { id: string; username: string; email: string };
    }>(mutation, user);

    return {
      id: createUser.id,
      name: createUser.username,
      email: createUser.email,
      emailVerified: null, // Add this property if email verification is used
      image: null, // Add this property if the user has a profile image
    } as AdapterUser;
  },

  async updateUser(user: Partial<AdapterUser>): Promise<AdapterUser> {
    const mutation = gql`
      mutation UpdateUser($id: ID!, $username: String, $email: String) {
        updateUser(id: $id, data: { username: $username, email: $email }) {
          id
          username
          email
        }
      }
    `;
    const { updateUser } = await client.request<{
      updateUser: { id: string; username: string; email: string };
    }>(mutation, user);

    return {
      id: updateUser.id,
      name: updateUser.username,
      email: updateUser.email,
      emailVerified: null, // Add this property if email verification is used
      image: null, // Add this property if the user has a profile image
    } as AdapterUser;
  },

  async linkAccount(account) {
    const mutation = gql`
      mutation LinkAccount(
        $provider: String!
        $providerAccountId: String!
        $userId: ID!
      ) {
        createAccount(
          data: {
            provider: $provider
            providerAccountId: $providerAccountId
            userId: $userId
          }
        ) {
          id
        }
      }
    `;
    await client.request(mutation, account);
    return account;
  },

  async getSessionAndUser(sessionToken: string) {
    const query = gql`
      query GetSession($sessionToken: String!) {
        session(token: $sessionToken) {
          userId
          expires
          user {
            id
            username
            email
          }
        }
      }
    `;
    const { session } = await client.request<{
      session: {
        userId: string;
        expires: string;
        user: { id: string; username: string; email: string };
      } | null;
    }>(query, { sessionToken });

    if (!session) return null;

    return {
      session: {
        sessionToken,
        expires: session.expires,
        userId: session.userId,
      },
      user: {
        id: session.user.id,
        name: session.user.username,
        email: session.user.email,
        emailVerified: null, // Add this property if email verification is used
        image: null, // Add this property if the user has a profile image
      },
    };
  },

  async createSession(session) {
    const mutation = gql`
      mutation CreateSession(
        $sessionToken: String!
        $userId: ID!
        $expires: String!
      ) {
        createSession(
          data: { token: $sessionToken, userId: $userId, expires: $expires }
        ) {
          id
        }
      }
    `;
    await client.request(mutation, session);
    return session;
  },

  async updateSession(session) {
    const mutation = gql`
      mutation UpdateSession($sessionToken: String!, $expires: String!) {
        updateSession(token: $sessionToken, data: { expires: $expires }) {
          id
        }
      }
    `;
    await client.request(mutation, session);
    return session;
  },

  async deleteSession(sessionToken: string) {
    const mutation = gql`
      mutation DeleteSession($sessionToken: String!) {
        deleteSession(token: $sessionToken) {
          id
        }
      }
    `;
    await client.request(mutation, { sessionToken });
  },
};
