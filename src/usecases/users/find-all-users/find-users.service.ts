import { UsersRepository } from "../../../repositories/users-repository";

export class FindUsersService {
  constructor(private repository: UsersRepository) {}
  async findAll() {
    return await this.repository.findAll();
  }
}
