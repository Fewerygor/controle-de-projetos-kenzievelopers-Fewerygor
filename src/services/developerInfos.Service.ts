import format from "pg-format";
import {
  DeveloperInfoResult,
  DeveloperInfos,
  DeveloperInfosCreate,
} from "../interfaces/developersInfos.interface";
import { client } from "../database";

export const createDeveloperInfosService = async (
  data: DeveloperInfosCreate
): Promise<DeveloperInfos> => {
  const queryFormat: string = format(
    `INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *`,
    Object.keys(data),
    Object.values(data)
  );

  const queryResult: DeveloperInfoResult = await client.query(queryFormat);

  return queryResult.rows[0];
};
