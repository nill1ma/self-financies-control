import { ExpensesRepository } from "../../../repositories/expenses-repository";

export class FindExpensesService {
  constructor(private repository: ExpensesRepository) {}
  async findAll() {
    return await this.repository.findAll();
  }
}
