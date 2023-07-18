import { ExpensesRepository } from "../../../repositories/expenses-repository";
import { ExpensesRepositoryInMemory } from "../../../repositories/repository-in-memory/expenses-repository-in-memory";
import { CreateExpenseService } from "./create-expense.service";

describe("Create expense", () => {
  let repository: ExpensesRepository;
  let service: CreateExpenseService;

  beforeAll(() => {
    repository = new ExpensesRepositoryInMemory();
    service = new CreateExpenseService(repository);
  });
  it("Should be able to create a expense", async () => {
    const expense = await service.create({
      destination: "Jiu Jitsu",
      payment_value: 100,
      due_time: new Date(),
      pay_day: new Date(),
      user_id: 1,
    });

    expect(expense).toHaveProperty("id")
  });
});
