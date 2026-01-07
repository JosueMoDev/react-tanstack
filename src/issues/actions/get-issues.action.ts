import { gitHubApi } from "../../api";
import { GitHubIssues } from "../interfaces";

export const getIssues = async (): Promise<GitHubIssues[]> => {
  const { data } = await gitHubApi.get<GitHubIssues[]>("/issues");
  return data;
};
