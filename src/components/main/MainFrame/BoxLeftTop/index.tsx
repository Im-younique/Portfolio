"use client";

// context
import { useMainExpand } from "@/lib/context/MainExpandContext";

// styles
import classes from "./boxlefttop.module.scss";

interface IProps {
  children: React.ReactNode;
}

const BoxLeftTop = ({ children }: IProps) => {
  const { activeSection } = useMainExpand();

  return (
    <section className={`${activeSection !== "none" && classes.shrink}`}>
      <div className={classes.box}>
        <div className={classes.title}>{children}</div>
      </div>
    </section>
  );
};

export default BoxLeftTop;
