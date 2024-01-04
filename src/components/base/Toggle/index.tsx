"use client";

import useToggle from "@/hooks/useToggle";

// styles
import classes from "./toggle.module.scss";

interface IProps {
  name: string;
  on: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

const Toggle = ({ name, on, disabled = false, onChange }: IProps) => {
  const [checked, toggle] = useToggle(on);

  const handleChange = () => {
    toggle();
    onChange && onChange();
  };

  return (
    <label className={classes.container}>
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

export default Toggle;
