import { Request, Response } from "express";
import { FindExpensesByDateService } from "./find-expenses-by-date.service";

export class FindExpensesByDateController {
  constructor(private service: FindExpensesByDateService) {}
  async handle(request: Request, response: Response) {
    const { date } = request.query;
    const expenses = await this.service.findByDate(new Date(String(date)));
    return response.json(expenses);
  }
}
