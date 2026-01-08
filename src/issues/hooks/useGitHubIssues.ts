import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions";
import { State } from "../interfaces";

interface Props {
  state: State;
}
export const useGitHubIssues = ({ state }: Props) => {
  const issuesQuery = useQuery({
    queryKey: ["issues", { state }],
    queryFn: () => getIssues(state),
    staleTime: 1000 * 60 * 60,
  });

  return {
    issuesQuery,
  };
};
