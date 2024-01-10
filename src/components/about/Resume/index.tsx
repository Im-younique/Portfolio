"use client";

import { useState, useMemo } from "react";

// styles
import classes from "./resume.module.scss";

// types
import { TResumeKind } from "@/types";

// icon
import {
  RiBriefcaseFill,
  RiGraduationCapFill,
  RiStarFill,
  RiAddBoxFill,
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
        categories = ["experience", "etc", "skills", "education"];
        break;
      case "education":
        categories = ["education", "experience", "etc", "skills"];
        break;
      case "skills":
        categories = ["skills", "education", "experience", "etc"];
        break;
      case "etc":
        categories = ["etc", "skills", "education", "experience"];
        break;
    }
    const selectedIndex = categories.indexOf(selected);

    const resultOrder = [
      classes.first,
      classes.second,
      classes.thrid,
      classes.forth,
    ].map(
      (_, index) =>
        [classes.first, classes.second, classes.thrid, classes.forth][
          (index + selectedIndex) % 4
        ]
    );

    return resultOrder[0];
  };

  return (
    <div className={classes.resume_container}>
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
            className={`${classes.resume_card} ${
              classes.card_0
            } ${makeOrderStyle("experience")}`}
          >
            <div className={classes.resume_card_title}>
              <RiBriefcaseFill />
              <span>experience</span>
            </div>
            <div className={classes.resume_card_content}>
              <span>회사경력</span>
            </div>
          </div>
          <div
            className={`${classes.resume_card} ${
              classes.card_1
            } ${makeOrderStyle("education")}`}
          >
            <div className={classes.resume_card_title}>
              <RiGraduationCapFill />
              <span>education</span>
            </div>
            <div className={classes.resume_card_content}>
              <span>학력</span>
            </div>
          </div>
          <div
            className={`${classes.resume_card} ${
              classes.card_2
            } ${makeOrderStyle("skills")}`}
          >
            <div className={classes.resume_card_title}>
              <RiStarFill />
              <span>skills</span>
            </div>
            <div className={classes.resume_card_content}>
              <span>언어 및 자격증</span>
            </div>
          </div>
          <div
            className={`${classes.resume_card} ${
              classes.card_3
            } ${makeOrderStyle("etc")}`}
          >
            <div className={classes.resume_card_title}>
              <RiAddBoxFill />
              <span>etc</span>
            </div>
            <div className={classes.resume_card_content}>
              <span>기타교육사항</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
