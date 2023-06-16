import { UserNotFound } from "../../../entities/errors/user-not-found";
import { UsersRepository } from "../../../repositories/users-repository";

export class DeleteUserService {
  constructor(private repository: UsersRepository) {}
  async delete(userId: number) {
    const user = await this.repository.findById(userId);
    if (!(user && user.hasOwnProperty('id'))) return new UserNotFound();
    await this.repository.delete(userId);
    return 'User successful removed!'
  }
}
