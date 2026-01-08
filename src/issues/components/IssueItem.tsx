import { FC } from "react";
import { FiInfo, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { GitHubIssue, State } from "../interfaces";
import { useQueryClient } from "@tanstack/react-query";
import { getIssue, getIssueComments } from "../actions";
import { timeSince } from "../../helpers";

interface Props {
  issue: GitHubIssue;
}
export const IssueItem: FC<Props> = ({ issue }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const prefetchData = () => {
    queryClient.prefetchQuery({
      queryKey: ["issues", issue.number],
      queryFn: () => getIssue(issue.number),
      staleTime: 1000 * 60 * 60,
    });

    queryClient.prefetchQuery({
      queryKey: ["issues", issue.number, "comments"],
      queryFn: () => getIssueComments(issue.number),
      staleTime: 1000 * 60 * 60,
    });
  };

  return (
    <div
      onMouseEnter={prefetchData}
      className="flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-900 hover:bg-slate-800"
    >
      {issue.state === State.Closed ? (
        <FiCheckCircle size={30} color="green" />
      ) : (
        <FiInfo size={30} color="red" className="min-w-10" />
      )}

      <div className="flex flex-col flex-grow px-2">
        <a
          onClick={() => navigate(`/issues/issue/${issue.number}`)}
          className="hover:underline"
        >
          {issue.title}
        </a>
        <span className="text-gray-500">
          {`#${issue.number} opened ${timeSince(issue.created_at)} ago by ${
            issue.user.login
          }`}
          <span className="font-bold">{issue.user.login}</span>
        </span>

        <div className="flex flex-wrap">
          {issue.labels.map((label) => (
            <span
              key={label.id}
              className="px-2 py-1 mx-1 text-xs text-white rounded-md"
              style={{
                border: `solid 1px #${label.color}`,
              }}
            >
              {label.name}
            </span>
          ))}
        </div>
      </div>

      <img
        src={issue.user.avatar_url}
        alt="User Avatar"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col items-center mx-2">
        <FiMessageSquare size={30} className="min-w-5" color="gray" />
        <span className="px-4 text-gray-400">{issue.comments}</span>
      </div>
    </div>
  );
};
