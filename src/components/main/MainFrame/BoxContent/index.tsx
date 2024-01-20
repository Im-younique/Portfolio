"use client";

// recoil
import { useRecoilState } from "recoil";
import { mainState } from "@/lib/recoil/atoms/mainState";

// components
import DividerWithIcon from "@/components/base/DividerWithIcon";

// styles
import classes from "./content.module.scss";

// types
import { TMainExpand, TDividerIcon } from "@/types";

// icon
import { RiCloseLine } from "@remixicon/react";

interface IProp {
  title: TMainExpand;
  icon_name: TDividerIcon;
  children: React.ReactNode;
}

const BoxContent = ({ title, icon_name, children }: IProp) => {
  const [expanded, setExpanded] = useRecoilState(mainState);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded("none");
  };

  const [fristTitle, lastTitle] = title.split(" ");
  return (
    <>
      <div
        className={`${classes.content} ${title === expanded && classes.view}`}
      >
        <div className={classes.pageTitle}>
          <h2 className={classes.titleText}>
            <span>{`${fristTitle} `}</span>
            <span className={classes.impactText}>{lastTitle}</span>
          </h2>
        </div>
        <DividerWithIcon icon_name={icon_name} />
        {children}
      </div>
      <RiCloseLine
        size={60}
        color="#ababab"
        className={`${classes.close_icon} ${
          title === expanded && classes.view
        }`}
        onClick={(e) => handleClose(e)}
      />
    </>
  );
};

export default BoxContent;
