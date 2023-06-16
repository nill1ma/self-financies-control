import { UsersRepository } from "../../../repositories/users-repository";
import { UsersRepositoryInMemory } from "../../../repositories/users-repository-in-memory.ts/users-repository-in-memory";
import { CreateUserService } from "../create-user/create-user.service";
import { FindUsersService } from "./find-users.service";

describe("Find All Users", () => {
  let repository: UsersRepository;
  let service: FindUsersService;
  let createService: CreateUserService;

  beforeAll(() => {
    repository = new UsersRepositoryInMemory();
    service = new FindUsersService(repository);
    createService = new CreateUserService(repository);
  });
  it("Should Return a empty list", async () => {
    const users = await service.findAll();
    expect(users).toHaveLength(0);
    expect(users).toEqual([]);
  });

  it("Should Return a list of Users with 1 user", async () => {
    await createService.create({
      username: "Jhon doe",
      password: "12345",
      email: "jhondoe@gmail.com",
    });
    const users = await service.findAll();
    expect(users).toHaveLength(1);
    expect(users[0]).toHaveProperty("id");
  });
});
