import { gitHubApi } from "../../api";
import { GitHUbLabel } from "../interfaces";

export const getLabels = async (): Promise<GitHUbLabel[]> => {
  const { data } = await gitHubApi.get<GitHUbLabel[]>("/labels");
  return data;
};
