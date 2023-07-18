import { knex } from "../../database";
import { Expenses } from "../../entities/expenses";
import { ExpensesEnum } from "../../usecases/expenses/expenses.enum";
import { CreateExpenseDTO } from "../../usecases/expenses/create-expense/create-expense.dto";
import { ExpensesRepository } from "../expenses-repository";
import { UpdateExpenseDTO } from "../../usecases/expenses/update-expense/update-expense.dto";

export class ExpensesRepositoryImplementation implements ExpensesRepository {
  async findByDate(date: Date): Promise<Expenses[]> {
    return await knex(ExpensesEnum.TABLE_NAME).where({
      due_time: date,
    });
  }
  async findAll(): Promise<Expenses[]> {
    return await knex.select().from(ExpensesEnum.TABLE_NAME);
  }
  async create(expense: CreateExpenseDTO): Promise<Expenses> {
    return await knex(ExpensesEnum.TABLE_NAME).insert(expense);
  }
  async update(expense: UpdateExpenseDTO): Promise<Expenses> {
    const { id, destination, payment_value, due_time, pay_day, user_id } =
      expense;
    return await knex(ExpensesEnum.TABLE_NAME)
      .where({ id })
      .update({ destination, payment_value, due_time, pay_day, user_id });
  }
}
