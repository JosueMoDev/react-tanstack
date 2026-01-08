import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions";
import { State } from "../interfaces";

interface Props {
  state: State;
  labels: string[];
}
export const useGitHubIssues = ({ state, labels }: Props) => {
  const issuesQuery = useQuery({
    queryKey: ["issues", { state, labels }],
    queryFn: () => getIssues(state, labels),
    staleTime: 1000 * 60 * 60,
  });

  return {
    issuesQuery,
  };
};
