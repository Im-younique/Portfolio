// styles
import classes from "./badge.module.scss";

// icon
import { RiPresentationFill, RiHeartFill, RiAwardFill } from "@remixicon/react";

export default function Badge() {
  return (
    <div className={`max-container ${classes.badge_wrapper}`}>
      <div className={classes.badge_container}>
        <div className={classes.col_3}>
          <RiPresentationFill size={50} />
          <h3>14+</h3>
          <p>강의/세미나/튜터링</p>
        </div>
        <div className={classes.col_3}>
          <RiHeartFill size={50} />
          <h3>32+</h3>
          <p>교육봉사시간</p>
        </div>
        <div className={classes.col_3}>
          <RiAwardFill size={50} />
          <h3>8+</h3>
          <p>수상경험</p>
        </div>
      </div>
    </div>
  );
}
