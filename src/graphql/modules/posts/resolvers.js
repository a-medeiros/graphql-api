import Post from '../../../models/postModel';

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