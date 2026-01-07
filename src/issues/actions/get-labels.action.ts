import { gitHubApi } from "../../api";
import { sleep } from "../../helpers";
import { GitHUbLabel } from "../interfaces";

export const getLabels = async (): Promise<GitHUbLabel[]> => {
  await sleep(1500);
  const { data } = await gitHubApi.get<GitHUbLabel[]>("/labels");
  return data;
};
