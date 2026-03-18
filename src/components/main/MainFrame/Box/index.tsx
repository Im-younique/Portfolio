"use client";

// context
import { useMainExpand } from "@/lib/context/MainExpandContext";

// styles
import classes from "./box.module.scss";

// types
import { TMainExpand } from "@/types";

interface IProps {
  boxName: TMainExpand;
  children: React.ReactNode;
}

const Box = ({ boxName, children }: IProps) => {
  const { activeSection, setActiveSection } = useMainExpand();

  const handleBoxClick = (name: TMainExpand) => {
    setActiveSection(name);
  };

  return (
    <section
      className={`${
        boxName === activeSection
          ? classes.expand
          : activeSection !== "none" && classes.shrink
      }`}
    >
      <div className={classes.box} onClick={() => handleBoxClick(boxName)}>
        {children}
      </div>
    </section>
  );
};

export default Box;
