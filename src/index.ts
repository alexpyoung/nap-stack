import { ApolloServer, gql } from 'apollo-server';
import Database from './database';
import { development as config } from './database/knexfile';
import resolvers from './graphql/resolvers';

const db = new Database(config);

const typeDefs = gql`
    type Query {
        users: [User]!
    }

    type User {
      id: String!
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

