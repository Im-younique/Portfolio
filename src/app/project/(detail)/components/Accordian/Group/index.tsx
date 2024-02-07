import classes from "../accordian.module.scss";

export default function Group({ children }: { children: React.ReactNode }) {
  return <div className={classes.group}>{children}</div>;
}
