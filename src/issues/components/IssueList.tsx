import { FC } from "react";
import { GitHubIssue, State } from "../interfaces";
import { IssueItem } from "./IssueItem";
interface Props {
  issues: GitHubIssue[];
  onStateChange: (state: State) => void;
  state: State;
}
export const IssueList: FC<Props> = ({ issues, onStateChange, state }) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button
          onClick={() => onStateChange(State.All)}
          className={`btn ${State.All === state ? "active" : ""} `}
        >
          All
        </button>
        <button
          onClick={() => onStateChange(State.Open)}
          className={`btn ${State.Open === state ? "active" : ""} `}
        >
          Open
        </button>
        <button
          onClick={() => onStateChange(State.Closed)}
          className={`btn ${State.Closed === state ? "active" : ""} `}
        >
          Closed
        </button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
