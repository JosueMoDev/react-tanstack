import { useQuery } from "@tanstack/react-query";
import { getIssue, getIssueComments } from "../actions";

export const useGitHubIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60 * 60,
    retry: false,
  });

  const issueCommentsQuery = useQuery({
    queryKey: ["issues", issueNumber, "comments"],
    queryFn: () => getIssueComments(issueNumber),
    staleTime: 1000 * 60 * 60,
    retry: false,
  });

  return {
    issueQuery,
    issueCommentsQuery,
  };
};
