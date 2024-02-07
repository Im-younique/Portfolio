import classes from "./container.module.scss";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className={classes.container}>
      <ul className={classes.listWrapper}>{children}</ul>
    </blockquote>
  );
}
