"use client";

import { useState } from "react";

import { ThemeToggle } from "..";

import classes from "./sidesetting.module.scss";

import { onActivate } from "@/lib/a11y";

import { RiSettings3Fill, RiCloseFill } from "@remixicon/react";

const SideSetting = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      {show ? (
        <div className={`${classes.fixed} ${classes.content}`}>
          <h4>CHOOSE THEME</h4>
          <ThemeToggle />
          <h4>LAST UPDATED</h4>
          <p>2026/07/25</p>
          <RiCloseFill
            className={classes.close}
            onClick={() => setShow(false)}
          />
        </div>
      ) : (
        <div
          className={`${classes.fixed} ${classes.tab}`}
          onClick={() => setShow(true)}
          onKeyDown={onActivate(() => setShow(true))}
          role="button"
          tabIndex={0}
          aria-label="설정 열기"
        >
          <RiSettings3Fill />
        </div>
      )}
    </>
  );
};

export default SideSetting;
