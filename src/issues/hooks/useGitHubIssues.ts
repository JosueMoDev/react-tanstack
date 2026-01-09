// import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getIssues } from "../actions";
import { State } from "../interfaces";
import { useEffect, useState } from "react";

interface Props {
  state: State;
  labels: string[];
}
export const useGitHubIssues = ({ state, labels }: Props) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [state]);

  useEffect(() => {
    setPage(1);
  }, [labels]);

  // const issuesQuery = useQuery({
  //   queryKey: ["issues", { state, labels, page }],
  //   queryFn: () => getIssues(state, labels, page),
  //   staleTime: 1000 * 60 * 60,
  // });

  const issuesQuery = useInfiniteQuery({
    queryKey: ["issues", { state, labels, page }],
    queryFn: ({ pageParam }) => {
      return getIssues(state, labels, pageParam);
    },
    staleTime: 1000 * 60 * 60,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length > 0 ? pages.length + 1 : undefined,
  });

  // const handleNextPage = (page: number) => {
  //   if (issuesQuery.data?.length === 0) return;
  //   setPage(page + 1);
  // };

  // const handlePrevPage = (page: number) => {
  //   if (page <= 1) return;
  //   setPage(page - 1);
  // };

  return {
    issuesQuery,
    // page,
    // handleNextPage,
    // handlePrevPage,
  };
};
