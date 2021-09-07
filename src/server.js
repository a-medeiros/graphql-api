import { ApolloServer } from 'apollo-server';

function server({ typeDefs, resolvers }) {
    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => console.log(`Hey, server started at ${url}`));
}

export default server;