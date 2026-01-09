import { useState } from "react";
import { LoadingSpinner } from "../../shared";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useGitHubIssues } from "../hooks";
import { State } from "../interfaces";

export const ListView = () => {
  const [state, setState] = useState(State.All);
  const [labels, setlabels] = useState<string[]>([]);

  const {
    issuesQuery,
    // , page, handleNextPage, handlePrevPage
  } = useGitHubIssues({
    state: state,
    labels: labels,
  });

  const issues = issuesQuery.data?.pages.flat() ?? [];

  const onSelectedLabel = (label: string) => {
    if (labels.includes(label)) {
      setlabels(labels.filter((l) => l !== label));
    } else {
      setlabels([...labels, label]);
    }
  };

  return (
    <div className="grid grid-cols-1 mt-5 sm:grid-cols-3">
      <div className="col-span-1 sm:col-span-2">
        {issuesQuery.isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-col justify-center ">
            <IssueList issues={issues} onStateChange={setState} state={state} />
            <button
              disabled={issuesQuery.isFetchingNextPage}
              onClick={() => issuesQuery.fetchNextPage()}
              className="p-2 transition-all bg-blue-500 rounded-md hover:bg-blue-700"
            >
              {issuesQuery.isFetchingNextPage
                ? "Cargando más..."
                : " cargar mas issues ..."}
            </button>
          </div>
        )}
        {/* <div className="flex items-center justify-between">
          <button
            onClick={() => handlePrevPage(page)}
            className="p-2 transition-all bg-blue-500 rounded-md hover:bg-blue-700"
          >
            anteriores
          </button>

          <span>{page}</span>

          <button
            onClick={() => handleNextPage(page)}
            className="p-2 transition-all bg-blue-500 rounded-md hover:bg-blue-700"
          >
            siguientes
          </button>
        </div> */}
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker labels={labels} onSelectedLabel={onSelectedLabel} />
      </div>
    </div>
  );
};
