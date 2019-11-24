import { ApolloServer, gql } from 'apollo-server';
import Database from './database';
import { development as config } from './database/knexfile';
import resolvers from './graphql/resolvers';

const db = new Database(config);

const typeDefs = gql`
  scalar UUID

  type Query {
    users: [User]!
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    deleteUser(id: UUID!): UUID!
  }

  type User {
    id: UUID!
    email: String!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // @ts-ignore
  dataSources: () => ({ db }),
});

server.listen().then(({ url }: { url: string }) => {
  console.log(`Server running at ${url}`);
});

