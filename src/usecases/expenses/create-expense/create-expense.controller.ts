import { CreateExpenseService } from "./create-expense.service";
import { Request, Response } from "express";

export class CreateExpenseController {
  constructor(private service: CreateExpenseService) {}
  async execute(request: Request, response: Response) {
    const {
      body: { destination, payment_value, due_time, pay_day, user_id },
    } = request;
    const user = await this.service.create({
      destination,
      payment_value,
      due_time,
      pay_day,
      user_id,
    });
    return response.json(user);
  }
}
