import { Request, Response } from "express";
import { FindExpensesService } from "./find-expenses.service";

export class FindExpensesController {
  constructor(private service: FindExpensesService) {}
  async handle(request: Request, response: Response) {
    const expenses = await this.service.findAll();
    return response.json(expenses);
  }
}
