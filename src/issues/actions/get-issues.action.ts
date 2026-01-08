import { gitHubApi } from "../../api";
import { GitHubIssue, State } from "../interfaces";

export const getIssues = async (
  state: State,
  labels: string[],
  page: number
): Promise<GitHubIssue[]> => {
  const params = new URLSearchParams();
  if (state !== State.All) params.append("state", state);
  if (labels.length > 0) params.append("labels", labels.join(","));

  params.append("per_page", "5");
  params.append("page", `${page}`);

  const { data } = await gitHubApi.get<GitHubIssue[]>("/issues", {
    params,
  });
  return data;
};
