import { Router } from "express";
import { createDeveloperInfosController } from "../controllers/developerInfos.controller";
import { verifyDeveloperById } from "../middlewares/verifyDeveloperById.middleware";
import { verifyDeveloperInfos } from "../middlewares/verifyDeveloperInfos.middleware";
import { verifyOS } from "../middlewares/verifyOs.middleware";

export const developerInfosRoutes: Router = Router();

developerInfosRoutes.post("/:id/infos", verifyDeveloperById, verifyOS, verifyDeveloperInfos, createDeveloperInfosController);
