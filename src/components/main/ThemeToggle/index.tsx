"use client";

import { useState, useEffect } from "react";

// styles
import classes from "./themetoggle.module.scss";

// icon
import { RiSunFill, RiMoonFill } from "@remixicon/react";

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.body.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.body.setAttribute("data-theme", "light");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.body;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <label className={classes.container}>
      <RiSunFill className={`${classes.icon} ${classes.sun}`} size={20} />
      <RiMoonFill className={`${classes.icon} ${classes.moon}`} size={20} />
      <input
        className={classes.input}
        type="checkbox"
        checked={!darkTheme || false}
        onChange={handleToggle}
      />
      <div className={classes.switch} />
    </label>
  );
};

export default ThemeToggle;
