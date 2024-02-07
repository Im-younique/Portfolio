import { IProjectInfo, IProjectList } from "@/types";

export const PROJECTLIST: IProjectList[] = [
  {
    name: "위킵 Weekip",
    href: "project/weekip",
    src: "/thumbnail/weekip.png",
  },
  {
    name: "reDuck",
    href: "project/reduck",
    src: "/thumbnail/reduck.png",
  },
  {
    name: "포트폴리오",
    href: "project/portfolio",
    src: "/thumbnail/portfolio.png",
  },
  {
    name: "CheerDo",
    href: "project/cheerdo",
    src: "/thumbnail/cheer-do.png",
  },
  {
    name: "1kmwine",
    href: "project/1kmwine",
    src: "/thumbnail/1kmwine.png",
  },
  {
    name: "달이 들어주는 오늘",
    href: "project/moondiary",
    src: "/thumbnail/moon-diary.png",
  },
  {
    name: "Boothstamp",
    href: "project/boothstamp",
    src: "/thumbnail/boothstamp.png",
  },
  {
    name: "대흥동 문화의 집",
    href: "project/culture",
    src: "/thumbnail/culture.png",
  },
  {
    name: "충남뮤직페스타",
    href: "project/cnmusicfesta",
    src: "/thumbnail/cnmusic.png",
  },
];

export const PROJECTINFO: { [key: string]: IProjectInfo } = Object.freeze({
  weekip: {
    title: "세상의 흐름을 읽는 IP - Weekip",
    startDate: "2023/07",
    endDate: "2023/12",
  },
  reduck: {
    title: "개발자를 위한 커뮤니티 및 멘토링 시스템 - reDuck",
    startDate: "2023/02",
    endDate: "(진행중)",
  },
  portfolio: {
    title: "임동윤 포트폴리오",
    startDate: "2024/01",
    endDate: "(진행중)",
  },
  cheerdo: {
    title: "너의 TODO를 응원해 - CheerDo",
    startDate: "2022/12",
    endDate: "2023/02",
  },
  "1kmwine": {
    title: "가장 빠른 와인 픽 & 오더 플랫폼 - 1kmwine",
    startDate: "2022/08",
    endDate: "2022/08",
  },
  moondiary: {
    title: "어른이를 위한 일기장 - 달이 들어주는 오늘",
    startDate: "2022/06",
    endDate: "2022/07",
  },
  boothstamp: {
    title: "AI/SW 페스티벌 부스 체험 - BoothStamp",
    startDate: "2022/07",
    endDate: "2022/08",
  },
  culture: {
    title: "청소년들의 건강한 문화놀이터 - 대흥동 청소년 문화의 집",
    startDate: "2022/09",
    endDate: "2022/11",
  },
  cnmusicfesta: {
    title: "충남 전역에서 펼쳐지는 정열의 음악 축제! - 충남뮤직페스타",
    startDate: "2021/09",
    endDate: "2021/12",
  },
});
