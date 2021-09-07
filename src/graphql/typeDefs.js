import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path';

// typeDefs é onde fica nossos schemas
// os schemas vão definir as ações que o usuário pode executar dentro da nossa aplicação.
// No graphql temos dois tipos de rotas: Query e Mutation.
// A rota Query é utilizada quando queremos buscar uma informação.
// E a rota Mutation é utilizada quando queremos criar, modificar ou deletar uma informação.
const typesArray = loadFilesSync(path.join(__dirname, 'modules', '**', '*.graphql'));
const typeDefs = mergeTypeDefs(typesArray);

export default typeDefs;