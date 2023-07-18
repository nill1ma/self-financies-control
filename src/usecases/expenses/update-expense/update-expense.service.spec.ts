import { ExpensesRepository } from "../../../repositories/expenses-repository";
import { ExpensesRepositoryInMemory } from "../../../repositories/repository-in-memory/expenses-repository-in-memory";
import { CreateExpenseService } from "../create-expense/create-expense.service";
import { UpdateExpenseService } from "./update-expense.service";

describe("Create expense", () => {
  let repository: ExpensesRepository;
  let service: UpdateExpenseService;
  let createService: CreateExpenseService;

  beforeAll(() => {
    repository = new ExpensesRepositoryInMemory();
    service = new UpdateExpenseService(repository);
    createService = new CreateExpenseService(repository);
  });
  it("Should be able to update an existent expense", async () => {
    await createService.create({
      destination: "Jiu Jitsu",
      payment_value: 100,
      due_time: new Date(),
      pay_day: new Date(),
      user_id: 1,
    });
    const expense = await service.update({
      id: 1,
      destination: "Jiu Jitsu Konoha",
      payment_value: 100,
      due_time: new Date(),
      pay_day: new Date(),
      user_id: 1,
    });

    expect(expense.destination).toEqual("Jiu Jitsu Konoha");
  });
});
