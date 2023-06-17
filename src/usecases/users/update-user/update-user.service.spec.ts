import { UserNotFound } from "../../../entities/errors/user-not-found";
import { UsersRepository } from "../../../repositories/users-repository";
import { UsersRepositoryInMemory } from "../../../repositories/users-repository-in-memory.ts/users-repository-in-memory";
import { CreateUserService } from "../create-user/create-user.service";
import { UpdateUserService } from "./update-user.service";

describe("Update User", () => {
  let repository: UsersRepository;
  let createService: CreateUserService;
  let service: UpdateUserService;

  beforeAll(() => {
    repository = new UsersRepositoryInMemory();
    createService = new CreateUserService(repository);
    service = new UpdateUserService(repository);
  });
  it("Should update user", async () => {
    const userMock = {
      username: "jhondoe",
      password: "12345",
      email: "jhondoe@gmail.com",
    };
    await createService.create(userMock);

    await service.update({
      ...userMock,
      id: 1,
      username: "jhon",
      email: "jhon@gmail.com",
    });

    const user = await repository.findById(1);

    expect(user?.username).toEqual("jhon");
    expect(user?.email).toEqual("jhon@gmail.com");
  });

  it("Should not be able to update user because user doesn't exist", async () => {
    expect(
      await service.update({
        id: 50,
        username: "jhondoe",
        password: "12345",
        email: "jhondoe@gmail.com",
      })
    ).toEqual(new UserNotFound());
  });
});
