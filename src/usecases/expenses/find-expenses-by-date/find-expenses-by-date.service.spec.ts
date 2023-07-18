import { ExpensesRepository } from "../../../repositories/expenses-repository";
import { ExpensesRepositoryInMemory } from "../../../repositories/repository-in-memory/expenses-repository-in-memory";
import { CreateExpenseService } from "../create-expense/create-expense.service";
import { FindExpensesByDateService } from "./find-expenses-by-date.service";

describe("Find Expense By Date", () => {
  let repository: ExpensesRepository;
  let service: FindExpensesByDateService;
  let createService: CreateExpenseService;

  beforeAll(() => {
    repository = new ExpensesRepositoryInMemory();
    service = new FindExpensesByDateService(repository);
    createService = new CreateExpenseService(repository);
  });
  it("Should Return a empty list", async () => {
    const expenses = await service.findByDate(new Date());
    expect(expenses).toHaveLength(0);
    expect(expenses).toEqual([]);
  });

  it("Should Return a list of Users with 1 user", async () => {
    await createService.create({
      destination: "Jiu Jitsu Canada",
      payment_value: 100,
      due_time: new Date(),
      pay_day: new Date(),
      user_id: 1,
    });
    const expenses = await service.findByDate(new Date("2023-07-17"));
    expect(expenses).toHaveLength(1);
    expect(expenses[0]).toHaveProperty("id");
  });
});
