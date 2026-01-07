import { gitHubApi } from "../../api";
import { GitHubIssue } from "../interfaces";

export const getIssues = async (): Promise<GitHubIssue[]> => {
  const { data } = await gitHubApi.get<GitHubIssue[]>("/issues");
  return data;
};
