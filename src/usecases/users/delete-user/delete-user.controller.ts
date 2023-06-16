import { Request, Response } from "express";
import { DeleteUserService } from "./delete-user.service";

export class DeleteUserController {
  constructor(private service: DeleteUserService) {}
  async handle(request: Request, response: Response) {
    const { userId } = request.params;
    const res = await this.service.delete(Number(userId));
    return response.status(200).json(res);
  }
}
