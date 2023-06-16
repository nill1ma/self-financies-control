import { UserNotFound } from "../../../entities/errors/user-not-found";
import { UsersRepository } from "../../../repositories/users-repository";
import { UsersRepositoryInMemory } from "../../../repositories/users-repository-in-memory.ts/users-repository-in-memory";
import { CreateUserService } from "../create-user/create-user.service";
import { FindUsersService } from "../find-all-users/find-users.service";
import { DeleteUserService } from "./delete-user.service";

describe("Create User", () => {
  let repository: UsersRepository;
  let service: DeleteUserService;
  let createService: CreateUserService;
  let findUsersService: FindUsersService;

  beforeAll(() => {
    repository = new UsersRepositoryInMemory();
    service = new DeleteUserService(repository);
    createService = new CreateUserService(repository);
    findUsersService = new FindUsersService(repository);
  });
  it("Should delete an user", async () => {
    await createService.create({
      username: "jhondoe",
      password: "12345",
      email: "jhondoe@gmail.com",
    });

    await createService.create({
      username: "janedoe",
      password: "12345",
      email: "janedoe@gmail.com",
    });

    await service.delete(1);

    const users = await findUsersService.findAll();

    expect(users).toHaveLength(1);
    expect(users[0].id).toEqual(2);
    
  });
  it("Should throw an exeption UserNotFound", async () => {
    expect(await service.delete(100)).toEqual(new UserNotFound())
  });
});
