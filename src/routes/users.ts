import { Request, Response, Router } from "express";
import { createUserFactory } from "../usecases/users/create-user/create-user.factory";
import { deleteUserFactory } from "../usecases/users/delete-user/delete-user.factory";
import { findUsersFactory } from "../usecases/users/find-all-users/find-users.factory";
import { findUserByEmailOrUsernameFactory } from "../usecases/users/find-user-by-username-or-email/find-user-by-email-or-username.factory";
import { updateUserFactory } from "../usecases/users/update-user/update-user.factory";

const userRouter = Router();

userRouter.post("/create", (request: Request, response: Response) => {
  return createUserFactory().execute(request, response);
});

userRouter.put("/:userId", (request: Request, response: Response) => {
  return updateUserFactory().update(request, response);
});

userRouter.get("/", (request: Request, response: Response) => {
  return findUsersFactory().handle(request, response);
});

userRouter.get(
  "/:email?/:username?",
  (request: Request, response: Response) => {
    return findUserByEmailOrUsernameFactory().handle(request, response);
  }
);

userRouter.delete("/:userId", (request: Request, response: Response) => {
  return deleteUserFactory().handle(request, response);
});

export { userRouter };
