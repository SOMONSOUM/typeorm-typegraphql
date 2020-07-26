/** @format */

module.exports = {
  develpment: {
    name: 'default',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'puthik_development',
    synchronize: true,
    logging: true,
    entities: ['src/entity/*.*'],
    migrations: ['src/databases/migration/*.*'],
    cli: {
      entities: 'src/entity',
      migrationsDir: 'src/databases/migration',
    },
  },
};
