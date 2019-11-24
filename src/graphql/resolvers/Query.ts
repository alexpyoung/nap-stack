export const Query = {
  async users(_parent: any, { ids }: any, context: any) {
    return context.dataSources.db.getUsers(ids);
  },
};
