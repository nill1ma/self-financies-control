import "dotenv/config";
import express from "express";
import { expenseRouter } from "./routes/expenses";
import { userRouter } from "./routes/users";

const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/expenses", expenseRouter)

export { app };
