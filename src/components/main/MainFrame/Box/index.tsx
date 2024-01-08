// recoil
import { useRecoilState } from "recoil";
import { mainState } from "@/lib/recoil/atoms/mainState";

// styles
import classes from "./box.module.scss";

// types
import { TMainExpand } from "@/types";

interface IProps {
  boxName: TMainExpand;
  children: React.ReactNode;
}

const Box = ({ boxName, children }: IProps) => {
  const [expanded, setExpanded] = useRecoilState(mainState);

  const handleBoxClick = (name: TMainExpand) => {
    setExpanded(name);
  };

  return (
    <section
      className={`${
        boxName === expanded
          ? classes.expand
          : expanded !== "none" && classes.shrink
      }`}
    >
      <div className={classes.box} onClick={() => handleBoxClick(boxName)}>
        {children}
      </div>
    </section>
  );
};

export default Box;
