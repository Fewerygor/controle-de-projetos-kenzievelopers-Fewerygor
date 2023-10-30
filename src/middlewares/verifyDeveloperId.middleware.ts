import { NextFunction, Request, Response } from "express";
import { Projects, ProjectsResult } from "../interfaces/projects.interface";
import { client } from "../database";
import AppError from "../../errors/App.error";

export const verifyDeveloperId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { developerId } = req.body;

  if (!developerId) {
    return next();
  }

  const queryResult: ProjectsResult = await client.query(
    'SELECT * FROM "developers" WHERE "id" = $1',
    [developerId]
  );

  if (!queryResult.rowCount) {
    throw new AppError("Developer not found.", 404);
  }

  const foundDeveloper: Projects = queryResult.rows[0];

  res.locals = { ...res.locals, foundDeveloper };

  return next();
};
