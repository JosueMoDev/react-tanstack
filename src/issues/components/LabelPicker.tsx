import { FC } from "react";
import { LoadingSpinner } from "../../shared";
import { useGitHubLabels } from "../hooks";

interface Props {
  labels: string[];
  onSelectedLabel: (label: string) => void;
}
export const LabelPicker: FC<Props> = ({ labels, onSelectedLabel }) => {
  const { labelsQuery } = useGitHubLabels();
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
          onClick={() => onSelectedLabel(label.name)}
          className={`px-2 py-1 text-xs font-semibold rounded-full cursor-pointer animate-fadeIn hover:bg-slate-800 ${
            labels.includes(label.name) ? "selected-label" : ""
          }`}
          style={{ border: `1px solid #${label.color}` }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
