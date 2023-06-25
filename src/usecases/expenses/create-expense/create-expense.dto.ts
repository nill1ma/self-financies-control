export interface CreateExpenseDTO {
  destination: string;
  payment_value: number;
  due_time: Date;
  pay_day: Date;
  user_id: number;
}
