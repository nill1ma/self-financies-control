import { ExpensesRepository } from "../../../repositories/expenses-repository";
import { UpdateExpenseDTO } from "./update-expense.dto";

export class UpdateExpenseService {
  constructor(private repository: ExpensesRepository) {}
  async update(expenseRequest: UpdateExpenseDTO) {
    const { id, destination, payment_value, due_time, pay_day, user_id } =
      expenseRequest;
    const expense = await this.repository.update({
      id,
      destination,
      payment_value,
      due_time,
      pay_day,
      user_id,
    });
    return expense;
  }
}
