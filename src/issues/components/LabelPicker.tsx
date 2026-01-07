import { LoadingSpinner } from "../../shared";
import { useGitHubLabels } from "../hooks/useGitHubLabes";

export const LabelPicker = () => {
  const { labelsQuery } = useGitHubLabels();
  console.log(labelsQuery.data);
  if (labelsQuery.isLoading)
    return (
      <div className="flex items-center justify-center h-52">
        <LoadingSpinner />
      </div>
    );
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className="px-2 py-1 text-xs font-semibold rounded-full cursor-pointer animate-fadeIn hover:bg-slate-800"
          style={{ border: `1px solid #${label.color}` }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
