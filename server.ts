/** @format */

import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { config } from 'dotenv';
import { createConnection } from 'typeorm';
config();

// Initialize
const app: express.Application = express();
const path = '/graphql';
const PORT = process.env.PORT || 8080;

// All Resolvers
import UserResolver from '@Resolver/user.resolver';

// Bootstrap function
const main = async (): Promise<void> => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  apolloServer.applyMiddleware({ app, path });

  app.listen(PORT, () => {
    console.log(`🚀 Started at http://localhost:${PORT}${path}`);
  });
};

main();
