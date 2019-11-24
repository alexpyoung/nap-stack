export const Mutation = {
  async createUser(_parent: any, { email, password }: any, { dataSources }: any) {
    const [id] = await dataSources.db.createUser(email, password);
    const [user] = await dataSources.db.getUsers([id]);
    return user;
  },

  async deleteUser(_parent: any, { id }: any, { dataSources }: any) {
    await dataSources.db.deleteUser(id);
    return id;
  },
};
