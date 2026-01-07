import { Navigate, useNavigate, useParams } from "react-router-dom";
import { IssueComment } from "../components/IssueComment";
import { FiSkipBack } from "react-icons/fi";
import { useGitHubIssue } from "../hooks";

export const IssueView = () => {
  const navigate = useNavigate();
  const params = useParams();
  const issueNumber = Number(params.number ?? 0);
  const { issueQuery, issueCommentsQuery } = useGitHubIssue(issueNumber);

  const comments = issueCommentsQuery.data ?? [];

  if (issueQuery.isLoading) return <div>Cargando Issue...</div>;
  if (!issueQuery.data) return <Navigate to="/404" />;
  return (
    <div className="mb-5">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-400 hover:underline"
        >
          <FiSkipBack />
          Regresar
        </button>
      </div>

      {comments?.map((comment) => (
        <IssueComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
