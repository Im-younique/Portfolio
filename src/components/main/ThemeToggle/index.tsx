"use client";

import useToggle from "@/hooks/useToggle";

// styles
import classes from "./themetoggle.module.scss";

// icon
import { RiSunFill, RiMoonFill } from "@remixicon/react";

interface IProps {
  name: string;
  on: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

const ThemeToggle = ({ name, on, disabled = false, onChange }: IProps) => {
  const [checked, toggle] = useToggle(on);

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
