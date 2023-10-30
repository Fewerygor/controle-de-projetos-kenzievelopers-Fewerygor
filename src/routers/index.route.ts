import { Router } from "express";
import { developersRoutes } from "./developers.route";
import { developerInfosRoutes } from "./developerInfos.route";
import { projectsRoutes } from "./projects.route";

export const routes: Router = Router();

routes.use("/developers", developersRoutes);
routes.use("/developers", developerInfosRoutes);
routes.use("/projects", projectsRoutes);
