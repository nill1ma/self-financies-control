import { UsersRepositoryImplementation } from "../../../repositories/implementations/users-repository-implementation";
import { DeleteUserController } from "./delete-user.controller";
import { DeleteUserService } from "./delete-user.service";
export const deleteUserFactory = () => {
  const repository = new UsersRepositoryImplementation();
  const service = new DeleteUserService(repository);
  const controller = new DeleteUserController(service);
  return controller;
};
