import { gitHubApi } from "../../api";
import { GitHubIssue, State } from "../interfaces";

export const getIssues = async (
  state: State,
  labels: string[]
): Promise<GitHubIssue[]> => {
  const params = new URLSearchParams();
  if (state !== State.All) params.append("state", state);
  if (labels.length > 0) params.append("labels", labels.join(","));

  const { data } = await gitHubApi.get<GitHubIssue[]>("/issues", {
    params,
  });
  return data;
};
