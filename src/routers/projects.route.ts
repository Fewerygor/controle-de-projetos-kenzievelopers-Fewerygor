import { Router } from "express";
import { createProjectsController, getProjectByIdController, updateProjectsController } from "../controllers/projects.controller";
import { verifyProjectId } from "../middlewares/verifyProjectId.middleware";
import { verifyDeveloperId } from "../middlewares/verifyDeveloperId.middleware";

export const projectsRoutes: Router = Router();

projectsRoutes.post("/", verifyDeveloperId, createProjectsController);
projectsRoutes.get("/:id", verifyProjectId, getProjectByIdController);
projectsRoutes.patch("/:id", verifyProjectId, verifyDeveloperId, updateProjectsController);
