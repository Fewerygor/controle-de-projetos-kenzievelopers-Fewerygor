import format from "pg-format";
import {
  CreateProjects,
  Projects,
  ProjectsResult,
  ProjectsUpdate,
} from "../interfaces/projects.interface";
import { client } from "../database";

export const createProjectsService = async (
  data: CreateProjects
): Promise<Projects> => {
  const queryFormat: string = format(
    `INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;`,
    Object.keys(data),
    Object.values(data)
  );

  const queryResult: ProjectsResult = await client.query(queryFormat);

  return queryResult.rows[0];
};

export const getProjectByIdService = async (
  id: string
): Promise<Projects> => {
  const query: string = `
    SELECT 
      "p"."id" AS "projectId",
      "p"."name" AS "projectName",
      "p"."description" AS "projectDescription",
      "p"."repository" AS "projectRepository",
      "p"."startDate" AS "projectStartDate",
      "p"."endDate" AS "projectEndDate",
      "d"."id" AS "developerId",
      "d"."name" AS "projectDeveloperName"
    FROM "projects" AS "p"
    LEFT JOIN "developers" AS "d"
      ON "p"."developerId" = "d"."id"
    WHERE "p"."id" = $1;  
  `;

  const queryResult: ProjectsResult = await client.query(query, [id]);

  return queryResult.rows[0];
};

export const updateProjectsService = async (
  developerId: string,
  data: ProjectsUpdate
): Promise<Projects> => {
  const queryFormat: string = format(
    `UPDATE "projects" SET (%I) = ROW (%L) WHERE "id" = $1 RETURNING *;`,
    Object.keys(data),
    Object.values(data)
  );

  const queryResult: ProjectsResult = await client.query(queryFormat, [developerId]);

  return queryResult.rows[0];
};
