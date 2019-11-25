import { ApolloServer, gql } from 'apollo-server';
import jwt from 'jsonwebtoken';

import Database from './database';
import { development as config } from './database/knexfile';
import resolvers from './graphql/resolvers';
import { verifyToken } from './authentication';

const db = new Database(config);

const typeDefs = gql`
  scalar UUID
  scalar JWT

  type Query {
    users: [User]!
    me: User!
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    deleteUser(id: UUID!): UUID!
    authenticate(email: String!, password: String!): JWT
  }

  type User {
    id: UUID!
    email: String!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const [, token] = (req.headers.authorization || '').split(' ');
    if (token) {
      const userId = await verifyToken(token);
      return { userId };
    }
    return {};
  },
  // @ts-ignore
  dataSources: () => ({ db }),
});

server.listen().then(({ url }: { url: string }) => {
  console.log(`Server running at ${url}`);
});

