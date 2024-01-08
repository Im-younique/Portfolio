// recoil
import { useRecoilState } from "recoil";
import { mainState } from "@/lib/recoil/atoms/mainState";

// styles
import classes from "./content.module.scss";

// types
import { TMainExpand } from "@/types";

// icon
import { RiCloseLine } from "@remixicon/react";

interface IProp {
  title: TMainExpand;
  children: React.ReactNode;
}

const BoxContent = ({ title, children }: IProp) => {
  const [expanded, setExpanded] = useRecoilState(mainState);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded("none");
  };

  const [fristTitle, lastTitle] = title.split(" ");
  return (
    <div className={`${classes.content} ${title === expanded && classes.view}`}>
      <div className={classes.pageTitle}>
        <h2 className={classes.titleText}>
          <span>{`${fristTitle} `}</span>
          <span className={classes.impactText}>{lastTitle}</span>
        </h2>
      </div>
      <div className={classes.pageContent}>{children}</div>
      <RiCloseLine
        size={60}
        color="#ababab"
        className={classes.close_icon}
        onClick={(e) => handleClose(e)}
      />
    </div>
  );
};

export default BoxContent;
