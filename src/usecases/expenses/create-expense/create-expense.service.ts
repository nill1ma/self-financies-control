import { ExpensesRepository } from "../../../repositories/expenses-repository";
import { CreateExpenseDTO } from "./create-expense.dto";

export class CreateExpenseService {
  constructor(private repository: ExpensesRepository) {}
  async create(expenseRequest: CreateExpenseDTO) {
    const { destination, payment_value, due_time, pay_day, user_id } =
      expenseRequest;
    const expense = await this.repository.create(expenseRequest);
    return expense;
  }
}
