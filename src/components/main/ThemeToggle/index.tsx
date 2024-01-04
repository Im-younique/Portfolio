"use client";

import useToggle from "@/hooks/useToggle";

// styles
import classes from "./themetoggle.module.scss";

// icon
import { RiSunFill, RiMoonFill } from "@remixicon/react";

interface IProps {
  name: string;
  theme: "dark" | "white";
  disabled?: boolean;
  onChange?: () => void;
}

const ThemeToggle = ({ name, theme, disabled = false, onChange }: IProps) => {
  const [checked, toggle] = useToggle(theme === "white");

  const handleChange = () => {
    toggle();
    onChange && onChange();
  };

  return (
    <label className={classes.container}>
      <RiSunFill className={`${classes.icon} ${classes.sun}`} size={20} />
      <RiMoonFill className={`${classes.icon} ${classes.moon}`} size={20} />
      <input
        className={classes.input}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <div className={classes.switch} />
    </label>
  );
};

export default ThemeToggle;
