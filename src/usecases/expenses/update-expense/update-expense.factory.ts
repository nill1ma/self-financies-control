import { ExpensesRepositoryImplementation } from "../../../repositories/implementations/expenses-repository-implementation";
import { UpdateExpenseService } from "./update-expense.service";
import { UpdateExpenseController } from "./update-expense.controller";

export const updateExpenseFactory = () => {
  const repository = new ExpensesRepositoryImplementation();
  const service = new UpdateExpenseService(repository);
  const controller = new UpdateExpenseController(service);
  return controller;
};
