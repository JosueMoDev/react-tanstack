import { gitHubApi } from "../../api";
import { GitHubIssue, State } from "../interfaces";

export const getIssues = async (state: State): Promise<GitHubIssue[]> => {
  const params = new URLSearchParams();
  if (state !== State.All) params.append("state", state);
  const { data } = await gitHubApi.get<GitHubIssue[]>("/issues", {
    params,
  });
  return data;
};
