import { gitHubApi } from "../../api";
import { GitHubIssue } from "../interfaces";

export const getIssue = async (issueNumber: number): Promise<GitHubIssue> => {
  const { data } = await gitHubApi.get<GitHubIssue>(`/issues/${issueNumber}`);
  return data;
};
