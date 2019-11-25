export const Query = {
  async users(_parent: any, { ids }: any, context: any) {
    return context.dataSources.db.getUsers(ids);
  },

  async me(_parent: any, _args: any, { dataSources, userId }: any) {
    const [user] = await dataSources.db.getUsers([userId]);
    return user;
  }
};
