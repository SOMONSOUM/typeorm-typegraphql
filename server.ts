import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema, Resolver, Query } from 'type-graphql';
import { config } from 'dotenv';
config();

const app: express.Application = express();
const path = '/graphql';
const PORT = process.env.PORT || 8080;
@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() {
    return 'Hello, World!';
  }
}

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
    validate: false,
  });

  const apolloServer = new ApolloServer({ schema });

  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`🚀 Started http://localhost:${PORT}${path}`);
  });
};

main();
