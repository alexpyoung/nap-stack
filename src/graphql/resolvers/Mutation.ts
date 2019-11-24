export const Mutation = {
  async createUser(_parent: any, _args: any, { dataSources }: any) {
    const [id] = await dataSources.db.createUser();
    const [user] = await dataSources.db.getUsers([id]);
    return user;
  },

  async deleteUser(_parent: any, { id }: any, { dataSources }: any) {
    await dataSources.db.deleteUser(id);
    return id;
  },
};
