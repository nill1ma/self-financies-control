import { Request, Response } from "express";
import { FindUserByEmailOrUsernameService } from "./find-user-by-email-or-username.service";

export class FindUserByEmailOrUsernameController {
  constructor(private service: FindUserByEmailOrUsernameService) {}
  async handle(request: Request, response: Response) {
    const { email, username } = request.params;
    const user = await this.service.findByEmailOrUsername(email, username);
    return response.json(user);
  }
}
