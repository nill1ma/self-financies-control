import { StatusCode } from "./status-code.enum";

export class UserNotFound {
  code: string = "USER_NOT_FOUND";
  message: string = "User not found!";
  statusCode: number = StatusCode.NOT_FOUND;
}
