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

  static create({ username, password, email }: User) {
    const user = new User({
      username,
      password,
      email,
    });
    return user;
  }
}
