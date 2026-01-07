import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { GitHubIssueComment } from "../interfaces";

interface Props {
  comment: GitHubIssueComment;
}

export const IssueComment: FC<Props> = ({ comment }) => {
  return (
    <div className="w-full">
      <div className="mt-2 border border-gray-200 rounded-md shadow-sm">
        <div className="flex items-center p-2 text-white bg-blue-500 rounded-t-md">
          <img
            src={comment.user.avatar_url}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="mx-2">{comment.user.login}</span>
        </div>
        <div className="p-4 text-white bg-gray-700">
          <ReactMarkdown>{comment.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
