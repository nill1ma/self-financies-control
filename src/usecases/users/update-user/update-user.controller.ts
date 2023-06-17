import { Request, Response } from "express";
import { UpdateUserService } from "./update-user.service";

export class UpdateUserController {
  constructor(private service: UpdateUserService) {}
  async update(request: Request, response: Response) {
    const { username, email, password } = request.body;
    const { userId } = request.params;
    const user = await this.service.update({
      id: Number(userId),
      username,
      password,
      email,
    });
    return response.json(user);
  }
}
