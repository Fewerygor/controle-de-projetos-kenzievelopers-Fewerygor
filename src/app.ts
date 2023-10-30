import express, { Application } from "express";
import "dotenv/config";
import "express-async-errors";
import { routes } from "./routers/index.route";
import { handleErrors } from "./middlewares/handlerError.middleware";

const app: Application = express();
app.use(express.json());
app.use("/", routes);
app.use(handleErrors);

export default app;
