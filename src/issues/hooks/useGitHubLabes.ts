import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions/get-labels.action";

export const useGitHubLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
  });

  return {
    labelsQuery,
  };
};
