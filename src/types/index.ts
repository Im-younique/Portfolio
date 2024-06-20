export type ThemeType = "dark" | "light";

export type TMainExpand = "none" | "about me" | "my project" | "guest book";

export type TDividerIcon = "profile" | "bag" | "book";

export type TResumeKind =
  | "experience"
  | "education"
  | "skills"
  | "license"
  | "etc";

export interface IProjectList {
  name: string;
  href: string;
  src: string;
}

export interface IProjectInfo {
  title: string;
  startDate: string;
  endDate: string;
}
