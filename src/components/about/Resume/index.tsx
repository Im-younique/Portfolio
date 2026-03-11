"use client";

import { useState } from "react";

// components
import Stars from "./Stars";

// styles
import classes from "./resume.module.scss";

// types
import { TResumeKind } from "@/types";

// constants
import { WORK_EXPERIENCES } from "@/constants";

// icon
import {
  RiBriefcaseFill,
  RiGraduationCapFill,
  RiStarFill,
  RiAddBoxFill,
  RiCalendar2Fill,
  RiIdCardFill,
} from "@remixicon/react";

export default function Resume() {
  const [selected, setSelected] = useState<TResumeKind>("experience");

  const handleSelect = (kind: TResumeKind) => {
    setSelected(kind);
  };

  const makeOrderStyle = (kind: TResumeKind) => {
    let categories: TResumeKind[] = [];
    switch (kind) {
      case "experience":
        categories = ["experience", "etc", "license", "skills", "education"];
        break;
      case "education":
        categories = ["education", "experience", "etc", "license", "skills"];
        break;
      case "skills":
        categories = ["skills", "education", "experience", "etc", "license"];
        break;
      case "license":
        categories = ["license", "skills", "education", "experience", "etc"];
        break;
      case "etc":
        categories = ["etc", "license", "skills", "education", "experience"];
        break;
    }
    const selectedIndex = categories.indexOf(selected);

    const resultOrder = [
      classes.first,
      classes.second,
      classes.thrid,
      classes.forth,
      classes.fifth,
    ].map(
      (_, index) =>
        [
          classes.first,
          classes.second,
          classes.thrid,
          classes.forth,
          classes.fifth,
        ][(index + selectedIndex) % 5]
    );

    return resultOrder[0];
  };

  return (
    <div className={`max-container ${classes.resume_container}`}>
      <div className={classes.resume_wrapper}>
        <div className={`content-container ${classes.select_wrapper}`}>
          <div
            className={`${classes.select_box} ${
              selected === "experience" && classes.box_active
            }`}
            onClick={() => handleSelect("experience")}
          >
            <RiBriefcaseFill />
            <span>experience</span>
          </div>
          <div
            className={`${classes.select_box} ${
              selected === "education" && classes.box_active
            } `}
            onClick={() => handleSelect("education")}
          >
            <RiGraduationCapFill />
            <span>education</span>
          </div>
          <div
            className={`${classes.select_box} ${
              selected === "skills" && classes.box_active
            }`}
            onClick={() => handleSelect("skills")}
          >
            <RiStarFill />
            <span>skills</span>
          </div>
          <div
            className={`${classes.select_box} ${
              selected === "license" && classes.box_active
            }`}
            onClick={() => handleSelect("license")}
          >
            <RiIdCardFill />
            <span>license</span>
          </div>
          <div
            className={`${classes.select_box} ${
              selected === "etc" && classes.box_active
            }`}
            onClick={() => handleSelect("etc")}
          >
            <RiAddBoxFill />
            <span>etc</span>
          </div>
        </div>
        <div className={`content-container ${classes.resume_card_wrapper}`}>
          <div
            className={`${classes.resume_card} ${classes.card} ${makeOrderStyle(
              "experience"
            )}`}
            onClick={() => handleSelect("experience")}
          >
            <div className={classes.resume_card_title}>
              <RiBriefcaseFill />
              <span>experience</span>
            </div>
            <div className={classes.resume_card_content}>
              {WORK_EXPERIENCES.map((exp, index) => (
                <div key={exp.company}>
                  {index > 0 && (
                    <span className={classes.color_seperator} />
                  )}
                  <div className={classes.resume_content}>
                    <h6>
                      <span>{exp.role.split(",")[0]} -</span>{" "}
                      <span>{exp.company}{exp.role.includes(",") ? `, ${exp.role.split(",")[1].trim()}` : ""}</span>
                    </h6>
                    <span className={classes.date}>
                      <RiCalendar2Fill size={15} /> {exp.period}
                    </span>
                    <ul>
                      {exp.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`${classes.resume_card} ${classes.card} ${makeOrderStyle(
              "education"
            )}`}
            onClick={() => handleSelect("education")}
          >
            <div className={classes.resume_card_title}>
              <RiGraduationCapFill />
              <span>education</span>
            </div>
            <div className={classes.resume_card_content}>
              <div className={classes.resume_content}>
                <h6>
                  <span>충남대학교 -</span> <span>컴퓨터공학과 학사</span>
                </h6>
                <span className={classes.date}>
                  <RiCalendar2Fill size={15} /> 2018.03 ~ 2024.02
                </span>
                <ul>
                  <li>Grade: 3.7 / 4.5</li>
                  <li>
                    정보보호동아리 ARGOS - 2023년도 부회장, 2022년도 기획부장
                  </li>
                  <li>2022 컴퓨터융합학부 학생회 MEMORY - 기획부장</li>
                </ul>
              </div>
              <span className={classes.color_seperator} />
              <div className={classes.resume_content}>
                <h6>
                  <span>천안중앙고등학교</span>
                </h6>
                <span className={classes.date}>
                  <RiCalendar2Fill size={15} /> 2015.03 ~ 2018.02
                </span>
                <ul>
                  <li>과학중점과정 이수</li>
                  <li>한일공동수업 참여</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${classes.resume_card} ${classes.card} ${makeOrderStyle(
              "skills"
            )}`}
            onClick={() => handleSelect("skills")}
          >
            <div className={classes.resume_card_title}>
              <RiStarFill />
              <span>skills</span>
            </div>
            <div className={classes.resume_card_content}>
              <div className={classes.col_wrapper}>
                <div className={classes.col_half}>
                  <h6>JavaScript (TypeScript)</h6>
                  <Stars scores={4.5} />
                  <h6>React (Next.js)</h6>
                  <Stars scores={4.5} />
                  <h6>HTML</h6>
                  <Stars scores={4.5} />
                  <h6>CSS (SCSS)</h6>
                  <Stars scores={4} />
                  <h6>Python (FastAPI)</h6>
                  <Stars scores={4} />
                  <h6>Git (GitLab)</h6>
                  <Stars scores={4} />
                  <h6>Playwright</h6>
                  <Stars scores={3.5} />
                </div>
                <div className={classes.col_half}>
                  <h6>PHP/Laravel/CI</h6>
                  <Stars scores={3.5} />
                  <h6>Firebase</h6>
                  <Stars scores={4} />
                  <h6>SQL</h6>
                  <Stars scores={3.5} />
                  <h6>Docker</h6>
                  <Stars scores={3} />
                  <h6>Rust</h6>
                  <Stars scores={3} />
                  <h6>Langchain</h6>
                  <Stars scores={3} />
                  <h6>AWS</h6>
                  <Stars scores={3} />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${classes.resume_card} ${classes.card} ${makeOrderStyle(
              "license"
            )}`}
            onClick={() => handleSelect("license")}
          >
            <div className={classes.resume_card_title}>
              <RiIdCardFill />
              <span>license</span>
            </div>
            <div className={classes.resume_card_content}>
              <div className={classes.resume_content}>
                <h6>
                  <span>정보처리기사</span>
                </h6>
                <span className={classes.date}>
                  <RiCalendar2Fill size={15} /> 2024.06.18
                </span>
                <p>비고 : 국가기술자격증 _ 발급처 : 과학기술정보통신부</p>
              </div>
              <span className={classes.color_seperator} />
              <div className={classes.resume_content}>
                <h6>
                  <span>TOPCIT_level_3</span>
                </h6>
                <span className={classes.date}>
                  <RiCalendar2Fill size={15} /> 2023.05.20
                </span>
                <p>비고 : 상위 10% 성적 _ 발급처 : 정보통신기획평가원</p>
              </div>
              <span className={classes.color_seperator} />
              <div className={classes.resume_content}>
                <h6>
                  <span>SQLD 개발자</span>
                </h6>
                <span className={classes.date}>
                  <RiCalendar2Fill size={15} /> 2022.06.04
                </span>
                <p>발급처 : 한국데이터산업진흥원 </p>
              </div>
            </div>
          </div>
          <div
            className={`${classes.resume_card} ${classes.card} ${makeOrderStyle(
              "etc"
            )}`}
            onClick={() => handleSelect("etc")}
          >
            <div className={classes.resume_card_title}>
              <RiAddBoxFill />
              <span>etc</span>
            </div>
            <div className={classes.resume_card_content}>
              <div className={classes.resume_content}>
                <h6>
                  <span>1784 스쿨혁명 대학생 멘토</span>
                </h6>
                <span className={classes.date}>
                  <RiCalendar2Fill size={15} /> 2022.12 ~ 2023.01 / 2023.12 ~
                  2024.01
                </span>
                <p>
                  대학생 멘토로 초등학교에 찾아가 AI 및 자율주행자동차 교육 진행
                </p>
              </div>
              <span className={classes.color_seperator} />
              <div className={classes.resume_content}>
                <h6>
                  <span>CNU SW Academy - 동계 프론트과정 수료</span>
                </h6>
                <span className={classes.date}>
                  <RiCalendar2Fill size={15} /> 2022.12 ~ 2023.03
                </span>
                <p>
                  JS, React 강의 이수, CS 및 클라우드 강의 이수, 1일 1알고리즘
                  문제풀이, 팀프로젝트 수행
                </p>
              </div>
              <span className={classes.color_seperator} />
              <div className={classes.resume_content}>
                <h6>
                  <span>2022 실리콘벨리 인턴쉽 수료 - HeadStart</span>
                </h6>
                <span className={classes.date}>
                  <RiCalendar2Fill size={15} /> 2022.06 ~ 2023.07
                </span>
                <p>실리콘벨리 현업자 특강 참석, 팀 프로젝트 진행</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
