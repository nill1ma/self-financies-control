import { Expenses } from "../entities/expenses";
import { CreateExpenseDTO } from "../usecases/expenses/create-expense/create-expense.dto";

export interface ExpensesRepository {
  create(expense: CreateExpenseDTO): Promise<Expenses>;
  findAll(): Promise<Expenses[]>;
}
