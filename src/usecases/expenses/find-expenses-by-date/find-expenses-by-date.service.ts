import { ExpensesRepository } from "../../../repositories/expenses-repository";

export class FindExpensesByDateService {
  constructor(private repository: ExpensesRepository) {}
  async findByDate(date: Date) {
    return await this.repository.findByDate(date);
  }
}
