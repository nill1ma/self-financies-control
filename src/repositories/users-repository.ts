import { EmailOrUsernameAlreadyExist } from "../entities/errors/email-or-username-already-exist";
import { User } from "../entities/user";
import { CreateUserDTO } from "../usecases/users/create-user/create-user-dto";

export interface UsersRepository {
  findAll(): Promise<User[]>;
  findById(userId: number): Promise<User | null>;
  create(user: CreateUserDTO): Promise<User>;
  delete(userId: number): Promise<void>;
  findByEmailOrUsername(
    email?: string,
    username?: string
  ): Promise<User | null>;
}
