import { Request, Response } from "express";
import {
  DeveloperInfos,
  DeveloperInfosCreate,
} from "../interfaces/developersInfos.interface";
import { createDeveloperInfosService } from "../services/developerInfos.Service";


export const createDeveloperInfosController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: DeveloperInfosCreate = {
    ...req.body,
    developerId: req.params.id,
  };
  const developerInfos: DeveloperInfos = await createDeveloperInfosService(
    data
  );

  return res.status(201).json(developerInfos);
};
