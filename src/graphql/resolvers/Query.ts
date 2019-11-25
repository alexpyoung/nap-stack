import { Sources } from './index';
import { User } from '../../database/types';
import { Context } from '../../index';

export const Query = {
  async users(_parent: any, { ids }: any, { dataSources }: Sources): Promise<User[]> {
    return dataSources.db.getUsers(ids);
  },

  async me(_parent: any, _args: any, { dataSources, userId }: Sources & Context): Promise<User> {
    if (userId === undefined) {
      throw new Error('Unauthenticated');
    }
    const [user] = await dataSources.db.getUsers([userId]);
    return user;
  }
};
