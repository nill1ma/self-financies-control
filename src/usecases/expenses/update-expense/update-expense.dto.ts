export interface UpdateExpenseDTO {
  [key:string]: number | string | Date
  id:number,
  destination: string;
  payment_value: number;
  due_time: Date;
  pay_day: Date;
  user_id: number;
}
