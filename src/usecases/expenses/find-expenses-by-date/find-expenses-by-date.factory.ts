import { ExpensesRepositoryImplementation } from "../../../repositories/implementations/expenses-repository-implementation";
import { FindExpensesByDateController } from "./find-expenses-by-date.controller";
import { FindExpensesByDateService } from "./find-expenses-by-date.service";

export const findExpensesByDateFactory = () => {
  const repository = new ExpensesRepositoryImplementation();
  const service = new FindExpensesByDateService(repository);
  const controller = new FindExpensesByDateController(service);
  return controller;
};
