import { UsersRepositoryImplementation } from "../../../repositories/implementations/users-repository-implementation";
import { FindUsersController } from "./find-users.controller";
import { FindUsersService } from "./find-users.service";

export const findUsersFactory = () => {
  const repository = new UsersRepositoryImplementation();
  const service = new FindUsersService(repository);
  const controller = new FindUsersController(service);
  return controller;
};
