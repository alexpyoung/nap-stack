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
    createUser: User!
    deleteUser(id: UUID!): UUID!
  }

  type User {
    id: UUID!
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

