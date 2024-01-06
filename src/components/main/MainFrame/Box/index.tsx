import classes from "./box.module.scss";

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className={classes.box}>{children}</div>
    </section>
  );
};

export default Box;
