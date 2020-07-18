import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { config } from 'dotenv';
import { createConnection } from 'typeorm';
import RegisterResolver from './src/graphql/user/user.resolver';
config();

const app: express.Application = express();
const path = '/graphql';
const PORT = process.env.PORT || 8080;

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [RegisterResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  apolloServer.applyMiddleware({ app, path });

  app.listen(PORT, () => {
    console.log(`🚀 Started at http://localhost:${PORT}${path}`);
  });
};

main();
