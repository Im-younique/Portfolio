// styles
import classes from "./resume.module.scss";

// icon
import {
  RiBriefcaseFill,
  RiGraduationCapFill,
  RiStarFill,
  RiAddBoxFill,
} from "@remixicon/react";

export default function Resume() {
  return (
    <div className={classes.resume_container}>
      <div className={classes.resume_wrapper}>
        <div className={`content-container ${classes.select_wrapper}`}>
          <div className={classes.select_box}>
            <RiBriefcaseFill />
            <span>experience</span>
          </div>
          <div className={classes.select_box}>
            <RiGraduationCapFill />
            <span>education</span>
          </div>
          <div className={classes.select_box}>
            <RiStarFill />
            <span>skills</span>
          </div>
          <div className={classes.select_box}>
            <RiAddBoxFill />
            <span>etc</span>
          </div>
        </div>
        <div className={`content-container ${classes.resume_card_wrapper}`}>
          <div className={classes.resume_card}>
            <div className={classes.resume_card_title}>
              <RiBriefcaseFill />
              <span>experience</span>
            </div>
            <div className={classes.resume_card_content}>
              <span>회사경력</span>
            </div>
          </div>
          <div className={classes.resume_card}>
            <div className={classes.resume_card_title}>
              <RiGraduationCapFill />
              <span>education</span>
            </div>
            <div className={classes.resume_card_content}>
              <span>학력</span>
            </div>
          </div>
          <div className={classes.resume_card}>
            <div className={classes.resume_card_title}>
              <RiStarFill />
              <span>skills</span>
            </div>
            <div className={classes.resume_card_content}>
              <span>언어 및 자격증</span>
            </div>
          </div>
          <div className={classes.resume_card}>
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
