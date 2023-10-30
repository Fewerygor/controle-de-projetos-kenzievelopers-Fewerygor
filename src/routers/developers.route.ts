import { Router } from "express";
import { createDeveloperController, deleteDeveloperController, readDeveloperByIdController, updateDeveloperController } from "../controllers/developers.controller";
import { verifyEmail } from "../middlewares/verifyEmail.Middleware";
import { verifyDeveloperById } from "../middlewares/verifyDeveloperById.middleware";

export const developersRoutes: Router = Router();

developersRoutes.post("/", verifyEmail, createDeveloperController);
developersRoutes.get("/:id", verifyDeveloperById, readDeveloperByIdController);
developersRoutes.patch("/:id", verifyDeveloperById, verifyEmail, updateDeveloperController);
developersRoutes.delete("/:id", verifyDeveloperById, deleteDeveloperController);

