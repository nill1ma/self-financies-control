import { CreateUserService } from "./create-user.service";
import { Request, Response } from "express";

export class CreateUserController {
  constructor(private service: CreateUserService) {}
  async execute(request: Request, response: Response) {
    const {
      body: { username, password, email },
    } = request;
    const user = await this.service.create({ username, password, email });
    return response.json(user);
  }
}
