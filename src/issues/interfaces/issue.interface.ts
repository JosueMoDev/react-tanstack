import { User, Reactions } from "../interfaces";

export interface GitHubIssue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: Label[];
  state: State;
  locked: boolean;
  assignee: null;
  assignees: unknown[];
  milestone: null;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: null;
  author_association: AuthorAssociation;
  type: null;
  active_lock_reason: null;
  draft?: boolean;
  pull_request?: PullRequest;
  body: string;
  closed_by: null;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
  sub_issues_summary?: SubIssuesSummary;
  issue_dependencies_summary?: IssueDependenciesSummary;
}

export enum AuthorAssociation {
  Collaborator = "COLLABORATOR",
  Contributor = "CONTRIBUTOR",
  Member = "MEMBER",
  None = "NONE",
}

export interface IssueDependenciesSummary {
  blocked_by: number;
  total_blocked_by: number;
  blocking: number;
  total_blocking: number;
}

export interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: null | string;
}

export interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at: null;
}

export enum State {
  Open = "open",
  Close = "close",
}

export interface SubIssuesSummary {
  total: number;
  completed: number;
  percent_completed: number;
}
