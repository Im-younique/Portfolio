// recoil
import { useRecoilValue } from "recoil";
import { mainState } from "@/lib/recoil/atoms/mainState";

// styles
import classes from "./title.module.scss";

// types
import { TMainExpand } from "@/types";

interface IProp {
  title: TMainExpand;
}

const BoxTitle = ({ title }: IProp) => {
  const mains = useRecoilValue(mainState);

  const [fristTitle, lastTitle] = title.split(" ");

  return (
    <div
      className={`${classes.title_wrapper} ${
        mains === title && classes.hidden
      }`}
    >
      <h2 className={classes.title_style}>
        <span
          className={`${classes.box_title_text} ${classes.title_frist}`}
          data-text={fristTitle}
        >
          {fristTitle}
        </span>
        <span> </span>
        <span
          className={`${classes.box_title_text} ${classes.title_second}`}
          data-text={lastTitle}
        >
          {lastTitle}
        </span>
      </h2>
    </div>
  );
};

export default BoxTitle;
