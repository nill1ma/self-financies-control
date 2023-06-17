import { EmailOrUsernameAlreadyExist } from "../../../entities/errors/email-or-username-already-exist";
import { UsersRepository } from "../../../repositories/users-repository";
import { CreateUserDTO } from "./create-user.dto";

export class CreateUserService {
  constructor(private repository: UsersRepository) {}
  async create(userRequest: CreateUserDTO) {
    const { email, username } = userRequest;
    const hasUser = await this.repository.findByEmailOrUsername(
      email,
      username
    );
    if (hasUser && hasUser.hasOwnProperty("id"))
      return new EmailOrUsernameAlreadyExist();
    const user = await this.repository.create(userRequest);
    return user;
  }
}
