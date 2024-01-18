import classes from "./box.module.scss";

const Box = () => {
  return (
    <div className={classes.box}>
      {/* TODO: Link 태그로 변경 */}
      <div className={classes.link}></div>
    </div>
  );
};

export default Box;
