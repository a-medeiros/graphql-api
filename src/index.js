import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import server from './server';

import db from './database/database';

server({ typeDefs, resolvers });