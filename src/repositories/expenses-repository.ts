import { Expenses } from "../entities/expenses";
import { CreateExpenseDTO } from "../usecases/expenses/create-expense/create-expense.dto";
import { UpdateExpenseDTO } from "../usecases/expenses/update-expense/update-expense.dto";

export interface ExpensesRepository {
  create(expense: CreateExpenseDTO): Promise<Expenses>;
  update(exoense: UpdateExpenseDTO): Promise<Expenses>;
  findAll(): Promise<Expenses[]>;
  findByDate(date: Date): Promise<Expenses[]>;
}
