import { ExpensesRepositoryImplementation } from "../../../repositories/implementations/expenses-repository-implementation";
import { FindExpensesController } from "./find-expenses.controller";
import { FindExpensesService } from "./find-expenses.service";

export const findExpensessFactory = () => {
  const repository = new ExpensesRepositoryImplementation();
  const service = new FindExpensesService(repository);
  const controller = new FindExpensesController(service);
  return controller;
};
