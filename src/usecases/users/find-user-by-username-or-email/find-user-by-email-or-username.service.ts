import { UserNotFound } from "../../../entities/errors/user-not-found";
import { User } from "../../../entities/user";
import { UsersRepository } from "../../../repositories/users-repository";

export class FindUserByEmailOrUsernameService {
  constructor(private repository: UsersRepository) {}
  async findByEmailOrUsername(
    email?: string,
    username?: string
  ): Promise<User | UserNotFound> {
    const user = await this.repository.findByEmailOrUsername(email, username);
    if (!user) return new UserNotFound();
    return user;
  }
}
