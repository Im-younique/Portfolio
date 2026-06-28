export type ThemeType = "dark" | "light";

export type TMainExpand = "none" | "about me" | "my project" | "guest book";

export type TDividerIcon = "profile" | "bag" | "book";

export type TResumeKind =
  | "experience"
  | "education"
  | "skills"
  | "license"
  | "etc";

export type TProjectCategory = "work" | "personal";

export interface IProjectList {
  name: string;
  href: string;
  src: string;
  category: TProjectCategory;
}

export interface IProjectInfo {
  title: string;
  startDate: string;
  endDate: string;
}

export interface IWorkExperience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}
