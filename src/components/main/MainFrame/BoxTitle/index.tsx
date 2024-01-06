// styles
import classes from "./title.module.scss";

interface IProp {
  text_first: string;
  text_second: string;
}

const BoxTitle = ({ text_first, text_second }: IProp) => {
  return (
    <div className={classes.title_wrapper}>
      <h2 className={classes.title_style}>
        <span
          className={`${classes.box_title_text} ${classes.title_frist}`}
          data-text={text_first}
        >
          {text_first}
        </span>
        <span> </span>
        <span
          className={`${classes.box_title_text} ${classes.title_second}`}
          data-text={text_second}
        >
          {text_second}
        </span>
      </h2>
    </div>
  );
};

export default BoxTitle;
