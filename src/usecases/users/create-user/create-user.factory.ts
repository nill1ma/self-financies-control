import { UsersRepositoryImplementation } from "../../../repositories/implementations/users-repository-implementation";
import { CreateUserController } from "./create-user.controller";
import { CreateUserService } from "./create-user.service";
export const createUserFactory = () => {
  const repository = new UsersRepositoryImplementation();
  const service = new CreateUserService(repository);
  const controller = new CreateUserController(service);
  return controller;
};
