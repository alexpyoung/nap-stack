import { createToken } from '../../authentication';
import { Sources } from './index';
import { User } from '../../database/types';

export const Mutation = {
  async createUser(_parent: any, { email, password }: any, { dataSources }: Sources): Promise<User> {
    const [id] = await dataSources.db.createUser(email, password);
    const [user] = await dataSources.db.getUsers([id]);
    return user;
  },

  async deleteUser(_parent: any, { id }: any, { dataSources }: any): Promise<string> {
    await dataSources.db.deleteUser(id);
    return id;
  },

  async authenticate(_parent: any, { email, password }: any, { dataSources }: any): Promise<string | null> {
    const id = await dataSources.db.authenticate(email, password);
    if (id === null) {
      return null;
    }
    return createToken(id);
  }
};
