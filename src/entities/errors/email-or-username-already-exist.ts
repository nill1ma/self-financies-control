import { StatusCode } from "./status-code.enum";

export class EmailOrUsernameAlreadyExist {
  code: string = "EMAIL_OR_USERNAME_ALREADY_EXIST";
  message: string = "Email or Username already exist!";
  statusCode: number = StatusCode.ALREADY_EXISTS;
}
