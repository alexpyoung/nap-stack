import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        foo: String
    }
`;

const resolvers = {
    Query: {
        foo: () => null,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`);
});

