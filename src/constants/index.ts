import { IProjectInfo, IProjectList, IWorkExperience } from "@/types";

export const PROJECTLIST: IProjectList[] = [
  // 실무 (회사)
  {
    name: "OfficeKeeper",
    href: "project/officekeeper",
    src: "/thumbnail/officekeeper.png",
    category: "work",
  },
  {
    name: "위킵 Weekip",
    href: "project/weekip",
    src: "/thumbnail/weekip.png",
    category: "work",
  },
  {
    name: "1kmwine",
    href: "project/1kmwine",
    src: "/thumbnail/1kmwine.png",
    category: "work",
  },
  // 개인 · 사이드
  {
    name: "첫잔 FirstDrink",
    href: "project/firstdrink",
    src: "/thumbnail/firstdrink.png",
    category: "personal",
  },
  {
    name: "reDuck",
    href: "project/reduck",
    src: "/thumbnail/reduck.png",
    category: "personal",
  },
  {
    name: "포트폴리오",
    href: "project/portfolio",
    src: "/thumbnail/portfolio.png",
    category: "personal",
  },
  {
    name: "CheerDo",
    href: "project/cheerdo",
    src: "/thumbnail/cheer-do.png",
    category: "personal",
  },
  {
    name: "달이 들어주는 오늘",
    href: "project/moondiary",
    src: "/thumbnail/moon-diary.png",
    category: "personal",
  },
  {
    name: "Boothstamp",
    href: "project/boothstamp",
    src: "/thumbnail/boothstamp.png",
    category: "personal",
  },
];

export const WORK_EXPERIENCES: IWorkExperience[] = [
  {
    company: "지란지교소프트",
    role: "Web Engineer, 사원",
    period: "2024.07 ~ (재직중)",
    achievements: [
      "OKEP 관리자 웹사이트 프론트엔드 개발",
      "OfficeKeeper 운영개발파트 소속, 제품 운영 개발",
      "OfficeKeeper AI 기능 개발",
      "크로스팀 코드리뷰 문화 기획 및 정착",
    ],
  },
  {
    company: "(주)에디슨랩",
    role: "S/W Engineer, 인턴",
    period: "2023.07 ~ 2023.12",
    achievements: [
      "세상의 흐름을 읽는 IP:Weekip 서비스 페이지, 관리자 페이지 제작",
      "자율주행캠프, IP:PBL 캠프 운영",
    ],
  },
  {
    company: "(주)나라셀라",
    role: "Front-end Developer, 인턴",
    period: "2022.08 (1개월)",
    achievements: [
      "1kmwine 앱, 베타 테스트 참여 및 버그 리포팅",
      "1kmwine 사장님 앱 프로토 타입 개발",
    ],
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
    endDate: "2024/05",
  },
  portfolio: {
    title: "임동윤 포트폴리오",
    startDate: "2024/01",
    endDate: "2024/06",
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
  firstdrink: {
    title: "칵테일 레시피 & 바텐딩 가이드 - 첫잔(FirstDrink)",
    startDate: "2026/03",
    endDate: "(진행중)",
  },
  boothstamp: {
    title: "AI/SW 페스티벌 부스 체험 - BoothStamp",
    startDate: "2022/07",
    endDate: "2022/08",
  },
  moondiary: {
    title: "어른이를 위한 일기장 - 달이 들어주는 오늘",
    startDate: "2022/06",
    endDate: "2022/07",
  },
  officekeeper: {
    title: "기업 보안 솔루션 - OfficeKeeper 관리자 웹사이트",
    startDate: "2024/07",
    endDate: "(진행중)",
  },
});
