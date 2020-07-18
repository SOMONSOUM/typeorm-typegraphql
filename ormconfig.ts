module.exports = {
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
};
