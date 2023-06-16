import { UsersRepositoryImplementation } from "../../../repositories/implementations/users-repository-implementation";
import { FindUserByEmailOrUsernameController } from "./find-user-by-email-or-username.controller";
import { FindUserByEmailOrUsernameService } from "./find-user-by-email-or-username.service";

export const findUserByEmailOrUsernameFactory = () => {
  const repository = new UsersRepositoryImplementation();
  const service = new FindUserByEmailOrUsernameService(repository);
  const controller = new FindUserByEmailOrUsernameController(service);
  return controller;
};
