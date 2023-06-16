import { User } from "../../entities/user";
import { CreateUserDTO } from "../../usecases/users/create-user/create-user-dto";
import { UsersRepository } from "../users-repository";

export class UsersRepositoryInMemory implements UsersRepository {
  private users: User[] = [];

  async findById(userId: number): Promise<User | null> {
    const user = this.users.find((user) => user.id === userId);
    return user ?? null;
  }

  async delete(userId: number): Promise<void> {
    const filteredUsers = this.users.filter((user) => user.id !== userId);
    this.users = filteredUsers;
  }
  async findAll(): Promise<User[]> {
    return this.users;
  }
  async create(userRequest: CreateUserDTO): Promise<User> {
    const user = {
      ...userRequest,
      id: this.users.length + 1,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.users.push(user);
    return user;
  }
  async findByEmailOrUsername(
    email?: string,
    username?: string
  ): Promise<User | null> {
    const user = this.users.find(
      (user) => user.email === email || user.username === username
    );
    return user ?? null;
  }
}
