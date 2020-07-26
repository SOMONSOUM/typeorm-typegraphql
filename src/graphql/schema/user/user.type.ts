/** @format */

import { ObjectType, Field } from 'type-graphql';

@ObjectType({ description: 'Query User' })
export default class User {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  phone_number: string;

  @Field()
  profile_picture: string;

  @Field()
  display_name: string;

  @Field()
  created_at: Date;
}
