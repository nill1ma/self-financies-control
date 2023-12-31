import { ExpensesRepository } from "../../../repositories/expenses-repository";
import { ExpensesRepositoryInMemory } from "../../../repositories/repository-in-memory/expenses-repository-in-memory";
import { CreateExpenseService } from "../create-expense/create-expense.service";
import { FindExpensesService } from "./find-expenses.service";

describe("Find All Expenses", () => {
  let repository: ExpensesRepository;
  let service: FindExpensesService;
  let createService: CreateExpenseService;

  beforeAll(() => {
    repository = new ExpensesRepositoryInMemory();
    service = new FindExpensesService(repository);
    createService = new CreateExpenseService(repository);
  });
  it("Should Return a empty list", async () => {
    const users = await service.findAll();
    expect(users).toHaveLength(0);
    expect(users).toEqual([]);
  });

  it("Should Return a list of Expenses with 1 expense", async () => {
    await createService.create({
      destination: "Jiu Jitsu Canada",
      payment_value: 100,
      due_time: new Date(),
      pay_day: new Date(),
      user_id: 1,
    });
    const expenses = await service.findAll();
    expect(expenses).toHaveLength(1);
    expect(expenses[0]).toHaveProperty("id");
  });
});
