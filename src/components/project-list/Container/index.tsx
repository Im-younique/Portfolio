import classes from "./container.module.scss";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
