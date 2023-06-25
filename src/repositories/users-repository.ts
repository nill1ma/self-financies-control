import { User } from "../entities/user";
import { CreateUserDTO } from "../usecases/users/create-user/create-user.dto";
import { UpdateUserDTO } from "../usecases/users/update-user/update-user.dto";

export interface UsersRepository {
  findAll(): Promise<User[]>;
  findById(userId: number): Promise<User | null>;
  create(user: CreateUserDTO): Promise<User>;
  delete(userId: number): Promise<void>;
  update(user: UpdateUserDTO): Promise<User>;
  findByEmailOrUsername(
    email?: string,
    username?: string
  ): Promise<User | null>;
}
