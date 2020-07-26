/** @format */

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class UsersTable1595750984484 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    if (!(await queryRunner.hasTable('users'))) {
      return await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
            },
            {
              name: 'username',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'password',
              type: 'text',
            },
            {
              name: 'display_name',
              type: 'varchar',
            },
            {
              name: 'profile_picture',
              type: 'text',
            },
            {
              name: 'created_at',
              type: 'timestamp',
            },
          ],
        })
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('users');
  }
}
