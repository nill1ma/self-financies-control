import { knex } from "../../database";
import { Expenses } from "../../entities/expenses";
import { ExpensesEnum } from "../../usecases/expenses/expenses.enum";
import { CreateExpenseDTO } from "../../usecases/expenses/create-expense/create-expense.dto";
import { ExpensesRepository } from "../expenses-repository";

export class ExpensesRepositoryImplementation implements ExpensesRepository {
  async findAll(): Promise<Expenses[]> {
    return await knex.select().from(ExpensesEnum.TABLE_NAME);
  }
  async create(expense: CreateExpenseDTO): Promise<Expenses> {
    return await knex(ExpensesEnum.TABLE_NAME).insert(expense);
  }
}
