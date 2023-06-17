import { randomUUID } from "node:crypto";

export class User {
  id?: number;
  username: string;
  password: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;

  private constructor(props: Omit<User, "id" | "created_at" | "updated_at">) {
    this.username = props.username;
    this.password = props.password;
    this.email = props.email;
  }

  static create({ username, password, email}: User) {
    const { properties, valid } = this.validate(username, password, email);
    if (valid)
      return Error(
        `Invalid inputs in properties ${properties.map((prop) => prop)}`
      );
    const user = new User({
      username,
      password,
      email,
    });
    return user;
  }
  static validate(username: string, password: string, email: string) {
    const properties = this.isEmpty([username, password, email]);
    return { properties, valid: properties.length > 0 };
  }

  static isEmpty(properties: string[]) {
    const props = properties.filter((property) => property.trim() === "");
    return props;
  }
}
