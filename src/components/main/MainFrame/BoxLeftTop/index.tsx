// recoil
import { useRecoilValue } from "recoil";
import { mainState } from "@/lib/recoil/atoms/mainState";

// styles
import classes from "./boxlefttop.module.scss";

interface IProps {
  children: React.ReactNode;
}

const BoxLeftTop = ({ children }: IProps) => {
  const mains = useRecoilValue(mainState);

  return (
    <section className={`${mains !== "none" && classes.shrink}`}>
      <div className={classes.box}>
        <div className={classes.title}>{children}</div>
      </div>
    </section>
  );
};

export default BoxLeftTop;
