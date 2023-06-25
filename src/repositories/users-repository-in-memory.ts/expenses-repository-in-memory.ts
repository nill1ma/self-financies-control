import { Expenses } from "../../entities/expenses";
import { CreateExpenseDTO } from "../../usecases/expenses/create-expense/create-expense.dto";
import { ExpensesRepository } from "../expenses-repository";

export class ExpensesRepositoryInMemory implements ExpensesRepository {
  private expenses: Expenses[] = [];

  async findAll(): Promise<Expenses[]> {
    return this.expenses;
  }

  async create(expenseRequest: CreateExpenseDTO): Promise<Expenses> {
    const expense = {
      ...expenseRequest,
      id: this.expenses.length + 1,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.expenses.push(expense);
    return expense;
  }
}
