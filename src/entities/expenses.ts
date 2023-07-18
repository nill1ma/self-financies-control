import { CreateExpenseDTO } from "../usecases/expenses/create-expense/create-expense.dto";

export class Expenses {
  id?:number
  destination: string;
  payment_value: number;
  due_time: Date;
  pay_day: Date;
  created_at?: Date;
  updated_at?: Date;
  user_id: number;

  private constructor(
    props: Omit<Expenses, "id" | "created_at" | "updated_at">
  ) {
    this.destination = props.destination;
    this.payment_value = props.payment_value;
    this.due_time = props.due_time;
    this.pay_day = props.pay_day;
    this.user_id = props.user_id;
  }

  static create({
    destination,
    payment_value,
    due_time,
    pay_day,
    user_id,
  }: Expenses) {
    return new Expenses({
      destination,
      payment_value,
      due_time,
      pay_day,
      user_id,
    });
  }
}
