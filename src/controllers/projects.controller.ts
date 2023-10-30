import { Request, Response } from "express";
import { CreateProjects, Projects } from "../interfaces/projects.interface";
import {
  createProjectsService,
  getProjectByIdService,
  updateProjectsService,
} from "../services/projects.service";


export const createProjectsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: CreateProjects = {
    ...req.body,
    developerId: req.params.id
  };
  const developer: Projects = await createProjectsService(data);

  return res.status(201).json(developer);
};

export const getProjectByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developer: Projects = await getProjectByIdService(req.params.id);

  return res.status(200).json(developer);
};

export const updateProjectsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developer: Projects = await updateProjectsService(
    req.params.id,
    req.body
  );

  return res.status(200).json(developer);
};
