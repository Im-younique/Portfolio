"use client";

import classes from "./imageSlider.module.scss";

import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

interface IProp {
  children: React.ReactNode;
}

export default function ImageSlider({ children }: IProp) {
  return (
    <div className={classes.container}>
      <div className={classes.imgBox}>{children}</div>
      <button className={`${classes.arrowBtn} ${classes.leftBtn}`}>
        <RiArrowLeftSLine />
      </button>
      <button className={`${classes.arrowBtn} ${classes.rightBtn}`}>
        <RiArrowRightSLine />
      </button>
    </div>
  );
}
