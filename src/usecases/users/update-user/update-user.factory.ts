import { UsersRepositoryImplementation } from "../../../repositories/implementations/users-repository-implementation";
import { UpdateUserController } from "./update-user.controller";
import { UpdateUserService } from "./update-user.service";
export const updateUserFactory = () => {
  const repository = new UsersRepositoryImplementation();
  const service = new UpdateUserService(repository);
  const controller = new UpdateUserController(service);
  return controller;
};
