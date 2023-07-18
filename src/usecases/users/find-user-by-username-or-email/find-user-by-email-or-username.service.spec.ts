import { UserNotFound } from "../../../entities/errors/user-not-found";
import { UsersRepository } from "../../../repositories/users-repository";
import { UsersRepositoryInMemory } from "../../../repositories/repository-in-memory/users-repository-in-memory";
import { CreateUserService } from "../create-user/create-user.service";
import { FindUserByEmailOrUsernameService } from "./find-user-by-email-or-username.service";

describe("Find All Users", () => {
  let repository: UsersRepository;
  let service: FindUserByEmailOrUsernameService;
  let createService: CreateUserService;

  beforeAll(() => {
    repository = new UsersRepositoryInMemory();
    service = new FindUserByEmailOrUsernameService(repository);
    createService = new CreateUserService(repository);
  });
  it("Should Return UserNotFound", async () => {
    expect(
      await service.findByEmailOrUsername("", "jhondoe@gmail.com")
    ).toEqual(new UserNotFound());
  });

  it("Should Return an User when find by email", async () => {
    await createService.create({
      username: "Jhon doe",
      password: "12345",
      email: "jhondoe@gmail.com",
    });
    const users = await service.findByEmailOrUsername("jhondoe@gmail.com", "");
    expect(users).toHaveProperty("id");
  });

  it("Should Return an User when find by username", async () => {
    const user = await service.findByEmailOrUsername("", "Jhon doe");
    expect(user).toHaveProperty("id");
  });
});
