// shared/models/project.model.ts
export interface Project {
  readonly title:       string;
  readonly description: string;
  readonly stack:       readonly string[];
  readonly repoUrl:     string;
  readonly demoUrl?:    string;
}