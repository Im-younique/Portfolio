import classes from "./container.module.scss";

const Container = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={classes.group}>
      {title && <h3 className={classes.group_title}>{title}</h3>}
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default Container;
