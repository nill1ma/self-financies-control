import { StatusCode } from "./status-code.enum";

export class UserNameAlreadyExist {
  code: string = "USERNAME_ALREADY_EXIST";
  message: string = "Username already exist!";
  statusCode: number = StatusCode.ALREADY_EXISTS;
}
