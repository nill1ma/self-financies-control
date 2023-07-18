import { ExpensesRepositoryImplementation } from "../../../repositories/implementations/expenses-repository-implementation";
import { CreateExpenseController } from "./create-expense.controller";
import { CreateExpenseService } from "./create-expense.service";

export const createExpenseFactory = () => {
  const repository = new ExpensesRepositoryImplementation();
  const service = new CreateExpenseService(repository);
  const controller = new CreateExpenseController(service);
  return controller;
};
