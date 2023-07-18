import { EmailOrUsernameAlreadyExist } from "../../../entities/errors/email-or-username-already-exist";
import { UsersRepositoryInMemory } from "../../../repositories/repository-in-memory/users-repository-in-memory";
import { UsersRepository } from "../../../repositories/users-repository";
import { CreateUserService } from "../create-user/create-user.service";

describe("Create User", () => {
  let repository: UsersRepository;
  let service: CreateUserService;

  beforeAll(() => {
    repository = new UsersRepositoryInMemory();
    service = new CreateUserService(repository);
  });
  it("Should create user", async () => {
    const user = await service.create({
      username: "jhondoe",
      password: "12345",
      email: "jhondoe@gmail.com",
    });

    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("created_at");
    expect(user).toHaveProperty("updated_at");
  });

  it("Should not be able to create a user because email or username already exist", async () => {
    expect(
      await service.create({
        username: "jhondoe",
        password: "12345",
        email: "jhondoe@gmail.com",
      })
    ).toEqual(new EmailOrUsernameAlreadyExist());
  });
});
