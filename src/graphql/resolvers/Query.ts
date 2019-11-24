export const Query = {
  async users(_parent: any, _args: any, context: any) {
    return context.dataSources.db.getUsers();
  },
};
