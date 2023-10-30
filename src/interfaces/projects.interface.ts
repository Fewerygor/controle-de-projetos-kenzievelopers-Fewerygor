import { QueryResult } from "pg";

export type Projects = {
  id: number;
  name: string;
  description: string;
  repository: string;
  startDate: Date;
  endDate: Date;
  developerId: number;
};

export type CreateProjects = Omit<Projects, "id">;
export type ProjectsResult = QueryResult<Projects>;
export type ProjectsRead = Projects[];
export type ProjectsUpdate = Partial<Projects>;
