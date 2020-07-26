/** @format */

import { Resolver, Query, Mutation } from 'type-graphql';
import User from '@Schema/user/user.type';
import UserEntity from '@Entity/User';

@Resolver()
export default class UserResolver {
  @Query(() => String)
  async hello() {
    return 'Hello, World!';
  }

  @Query(() => [User])
  async userList(): Promise<User[]> {
    const users = await UserEntity.find();
    return users;
  }
}
