export class Expenses {
  id?: string;
  destination: string;
  payment_value: Number;
  due_time: Date;
  pay_day: Date;
  created_at?: Date;
  updated_at?: Date;

  private constructor(
    props: Omit<Expenses, "id" | "created_at" | "updated_at">
  ) {
    this.destination = props.destination;
    this.payment_value = props.payment_value;
    this.due_time = props.due_time;
    this.pay_day = props.pay_day;
  }

  static create({ destination, payment_value, due_time, pay_day }: Expenses) {
    const { isValid } = this.validate(
      destination,
      payment_value,
      due_time,
      pay_day
    );
    if (!isValid)
      return Error(
        `Invalid inputs, check your request and make sure all of information are correct!`
      );
    const expense = new Expenses({
      destination,
      payment_value,
      due_time,
      pay_day,
    });
    return expense;
  }
  static validate(
    destination: string,
    payment_value: Number,
    due_time: Date,
    pay_day: Date
  ) {
    const _destination = this.isEmpty([destination]);
    const dates = this.isValidDate([due_time, pay_day]);
    return {
      isValid: _destination.length > 0 && payment_value > 0 && dates.length > 0,
    };
  }

  static isEmpty(properties: string[]) {
    const props = properties.filter((property) => property.trim() === "");
    return props;
  }

  static isValidDate(properties: Date[]) {
    const props = properties.filter((property) => property instanceof Date);
    return props;
  }
}
