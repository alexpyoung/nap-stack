module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "postgres",
      user: "postgres",
    },
    migrations: {
      directory: "./migrations",
      tableName: "migrations",
    }
  },
};

