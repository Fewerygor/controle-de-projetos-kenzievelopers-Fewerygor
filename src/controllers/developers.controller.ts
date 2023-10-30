import { NextFunction, Request, Response } from "express";
import { Developer } from "../interfaces/developers.interface";
import {
  createDeveloperService,
  deleteDeveloperService,
  readDeveloperByIdService,
  updateDeveloperService,
} from "../services/developers.service";

export const createDeveloperController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developer: Developer = await createDeveloperService(req.body);

  return res.status(201).json(developer);
};

export const readDeveloperByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developer: Developer = await readDeveloperByIdService(req.params.id);

  return res.status(200).json(developer);
};

export const updateDeveloperController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developer: Developer = await updateDeveloperService(
    req.params.id,
    req.body
  );

  return res.status(200).json(developer);
};

export const deleteDeveloperController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteDeveloperService(req.params.id);

  return res.status(204).json();
};
