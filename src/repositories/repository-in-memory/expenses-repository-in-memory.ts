import { Expenses } from "../../entities/expenses";
import { CreateExpenseDTO } from "../../usecases/expenses/create-expense/create-expense.dto";
import { UpdateExpenseDTO } from "../../usecases/expenses/update-expense/update-expense.dto";
import { ExpensesRepository } from "../expenses-repository";

export class ExpensesRepositoryInMemory implements ExpensesRepository {
  private expenses: Expenses[] = [];

  async findByDate(date: Date): Promise<Expenses[]> {
    return this.expenses.filter((expense) => {
      const { due_time } = expense;
      return (
        `${due_time.getFullYear() - due_time.getMonth()}` ===
          `${date.getFullYear() - date.getMonth()}` ||
        `${
          due_time.getFullYear() - due_time.getMonth() - due_time.getDate()
        }` === `${date.getFullYear() - date.getMonth() - date.getDate()}`
      );
    });
  }

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
  async update(expenseRequest: UpdateExpenseDTO): Promise<Expenses> {
    const updatedExpense = this.expenses.map((expense) => {
      if (expense.id === expenseRequest.id) {
        expense = expenseRequest;
        return expense;
      }
    });
    return updatedExpense.find((expense) => expense?.id === expenseRequest.id)!;
  }
}
