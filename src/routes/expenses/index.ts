import { Request, Response, Router } from "express";
import { CreateExpenseDTO } from "../../usecases/expenses/create-expense/create-expense.dto";
import { createExpenseFactory } from "../../usecases/expenses/create-expense/create-expense.factory";
import { findExpensessFactory } from "../../usecases/expenses/find-all-expenses/find-expenses.factory";
import { findExpensesByDateFactory } from "../../usecases/expenses/find-expenses-by-date/find-expenses-by-date.factory";
import { UpdateExpenseDTO } from "../../usecases/expenses/update-expense/update-expense.dto";
import { updateExpenseFactory } from "../../usecases/expenses/update-expense/update-expense.factory";
import { createSchema, updateSchema, validateRequest } from "./schemas";
const expenseRouter = Router();

expenseRouter.post("/create", (request: Request, response: Response) => {
  const { error } = validateRequest<CreateExpenseDTO>(
    createSchema,
    request.body
  );
  if (error) return response.send(error?.details);
  return createExpenseFactory().execute(request, response);
});

expenseRouter.put("/update", (request: Request, response: Response) => {
  const { error } = validateRequest<UpdateExpenseDTO>(
    updateSchema,
    request.body
  );
  if (error) return response.send({ ...error?.details });
  return updateExpenseFactory().update(request, response);
});

expenseRouter.get("/", (request: Request, response: Response) => {
  return findExpensessFactory().handle(request, response);
});

expenseRouter.get("/filter", (request: Request, response: Response) => {
  return findExpensesByDateFactory().handle(request, response);
});

// userRouter.delete("/:userId", (request: Request, response: Response) => {
//   return deleteUserFactory().handle(request, response);
// });

export { expenseRouter };
