import { FindUsersService } from "./find-users.service";
import { Request, Response } from "express";

export class FindUsersController {
  constructor(private service: FindUsersService) {}
  async handle(request: Request, response: Response) {
    const users = await this.service.findAll();
    return response.json(users);
  }
}
