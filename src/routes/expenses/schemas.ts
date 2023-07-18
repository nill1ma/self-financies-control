import Joi from "joi";
import { CreateExpenseDTO } from "../../usecases/expenses/create-expense/create-expense.dto";
import { UpdateExpenseDTO } from "../../usecases/expenses/update-expense/update-expense.dto";

const createSchema: Joi.ObjectSchema<CreateExpenseDTO> = Joi.object({
  destination: Joi.string().required(),
  payment_value: Joi.number().required(),
  due_time: Joi.date().required(),
  pay_day: Joi.date().required(),
  user_id: Joi.number().required(),
});

const updateSchema: Joi.ObjectSchema<UpdateExpenseDTO> = Joi.object({
  id: Joi.number().required(),
  destination: Joi.string().required(),
  payment_value: Joi.number().required(),
  due_time: Joi.date().required(),
  pay_day: Joi.date().required(),
  user_id: Joi.number().required(),
});

const validateRequest = <T>(
  schema: Joi.ObjectSchema<T>,
  body: ReadableStream<Uint8Array>
) => {
  const { error } = schema.validate(body);
  return { error };
};

export { validateRequest, createSchema, updateSchema };
