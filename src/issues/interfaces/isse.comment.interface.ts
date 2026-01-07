import { Reactions, User } from ".";

export interface GitHubIssueComment {
  url: string;
  html_url: string;
  issue_url: string;
  id: number;
  node_id: string;
  user: User;
  created_at: Date;
  updated_at: Date;
  body: string;
  author_association: string;
  reactions: Reactions;
  performed_via_github_app: PerformedViaGithubApp | null;
}

export interface PerformedViaGithubApp {
  id: number;
  client_id: string;
  slug: string;
  node_id: string;
  owner: User;
  name: string;
  description: string;
  external_url: string;
  html_url: string;
  created_at: Date;
  updated_at: Date;
  permissions: Permissions;
  events: string[];
}

export interface Permissions {
  administration: string;
  checks: string;
  issues: string;
  metadata: string;
  pull_requests: string;
}
