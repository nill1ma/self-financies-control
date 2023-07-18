import { Request, Response } from "express";
import { UpdateExpenseService } from "./update-expense.service";

export class UpdateExpenseController {
  constructor(private service: UpdateExpenseService) {}

  async update(request: Request, response: Response) {
    const {
      body: { id, destination, payment_value, due_time, pay_day, user_id },
    } = request;
    const user = await this.service.update({
      id: Number(id),
      destination,
      payment_value,
      due_time,
      pay_day,
      user_id,
    });
    return response.json(user);
  }
}
