import { knex } from "../../database";
import { User } from "../../entities/user";
import { CreateUserDTO } from "../../usecases/users/create-user/create-user-dto";
import { UsersRepository } from "../users-repository";

export class UsersRepositoryImplementation implements UsersRepository {
  async findById(userId: number): Promise<User | null> {
    return await knex.select().from("users").where({ id: userId });
  }
  async delete(userId: number): Promise<void> {
    await knex("users").delete().where({ id: userId });
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
      .orWhere({ username });
  }
}
