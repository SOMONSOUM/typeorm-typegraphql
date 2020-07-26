/** @format */

import { Resolver, Query } from 'type-graphql';
import UserType from '@Schema/user/user.type';
import UserEntity from '@Entity/User';

@Resolver()
export default class UserResolver {
  @Query(() => String)
  async hello() {
    return 'Hello, World!';
  }

  @Query(() => [UserType])
  async userList(): Promise<UserType[]> {
    const users = await UserEntity.find();
    return users;
  }
}
