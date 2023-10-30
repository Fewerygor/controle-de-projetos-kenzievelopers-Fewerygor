import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { DeveloperInfoResult } from "../interfaces/developersInfos.interface";
import AppError from "../../errors/App.error";

export const verifyDeveloperInfos = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  if (!id) {
    return next();
  }

  const query: string = `SELECT * FROM "developerInfos" WHERE "developerId" = $1;`;
  const queryResult: DeveloperInfoResult = await client.query(query, [id]);

  if (queryResult.rowCount) {
    throw new AppError("Developer infos already exists.", 409);
  }

  return next();
};
