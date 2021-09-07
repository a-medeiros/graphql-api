import Post from '../../../models/postModel';
// Os resolvers são funções que vão lidar com as rotas.
// Por exemplo, vamos dizer que queremos pegar todos os usuários que temos no nosso banco de dados.
// Então vamos criar uma rota em Query que pede essa lista de todos os usuários. 
// E ai, em resolvers, é que a gente definir uma função que vai buscar essa lista de usuários no banco de dados.
// São os resolvers que vão fazer as ações definidas pelo meu schema.

const resolvers = {
    Query: {
        allPosts: async () => { 
            const posts = await Post.findAll();
            return posts;
        },
        getPostById: async (_, args) => { 
            const post = await Post.findOne({ where: { id: args.id } });
            if (post === null) {
                return 'Post not found!'
            } else {
                return post;
            };
        }
    },
    Mutation: {
        createPost: async (_, args) => {
            const newPost = Post.create({
                id: String(Math.random()),
                title: args.data.title,
                content: args.data.content,
                author: args.data.author
            });

            return newPost;
        },
        deletePost: async (_, args) => {
            await Post.destroy({ where: { id: args.id } });

            return 'Post was deleted!'
        }
    }
}

export default resolvers;