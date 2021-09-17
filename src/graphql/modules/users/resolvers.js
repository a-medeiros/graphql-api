import User from '../../../models/userModel';
import { v4 as uuid } from 'uuid';

const resolvers = {
    Query: {
        allUsers: async () => {
            const users = await User.findAll();
            return users
        },
        getUserById: async (_, args) => {
            const user = await User.findOne({ where: { id: args.id } });
            if (user === null) {
                return 'User not found!';
            } else {
                return user;
            };
        }
    },
    Mutation: {
        createUser: async (_, args) => {
            const newUser = User.create({
                id: uuid(),
                name: args.data.name,
                email: args.data.email
            });

            return newUser;
        },
        deleteUser: async (_, args) => {
            await User.destroy({ where: { id: args.id } });

            return 'User was deleted!';
        }
    }
}

export default resolvers;