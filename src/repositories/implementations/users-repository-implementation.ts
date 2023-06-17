import { knex } from "../../database";
import { User } from "../../entities/user";
import { CreateUserDTO } from "../../usecases/users/create-user/create-user-dto";
import { UpdateUserDTO } from "../../usecases/users/update-user/update-user-dto";
import { UsersRepository } from "../users-repository";

export class UsersRepositoryImplementation implements UsersRepository {
  async update(user: UpdateUserDTO): Promise<User> {
    const { id, username, email, password } = user;
    return await knex("users")
      .where({ id })
      .update({ username, email, password });
  }
  async findById(userId: number): Promise<User | null> {
    return await knex.select().from("users").where({ id: userId }).first();
  }
  async delete(userId: number): Promise<void> {
    await knex("users").where({ id: userId }).delete();
  }
  async findAll(): Promise<User[]> {
    return await knex.select().from("users");
  }
  async create(user: CreateUserDTO): Promise<User> {
    return await knex("users").insert(user);
  }
  async findByEmailOrUsername(
    email?: string,
    username?: string
  ): Promise<User> {
    return await knex
      .select()
      .from("users")
      .where({ email })
      .orWhere({ username })
      .first();
  }
}
