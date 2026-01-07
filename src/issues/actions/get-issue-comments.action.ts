import { gitHubApi } from "../../api";
import { GitHubIssueComment } from "../interfaces";

export const getIssueComments = async (
  issueNumber: number
): Promise<GitHubIssueComment[]> => {
  const { data } = await gitHubApi.get<GitHubIssueComment[]>(
    `/issues/${issueNumber}/comments`
  );
  return data;
};
