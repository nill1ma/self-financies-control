import { UserNotFound } from "../../../entities/errors/user-not-found";
import { User } from "../../../entities/user";
import { UsersRepository } from "../../../repositories/users-repository";
import { UpdateUserDTO } from "./update-user-dto";

export class UpdateUserService {
  constructor(private repository: UsersRepository) {}
  async update(userRequest: UpdateUserDTO) {
    const { id, email, username, password } = userRequest;
    const hasUser = await this.repository.findById(id);
    if (!hasUser) return new UserNotFound();
    const user = await this.repository.update({
      id,
      email,
      username,
      password,
    });
    
    return user;
  }
}
