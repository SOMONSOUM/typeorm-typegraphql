import { Resolver, Query, Mutation } from 'type-graphql';
import { User } from '../../entity/User';

@Resolver()
export default class RegisterResolver {
  @Query(() => String)
  async hello() {
    return 'Hello, World!';
  }

  // @Mutation(() => User)
  // async register() {}
}
