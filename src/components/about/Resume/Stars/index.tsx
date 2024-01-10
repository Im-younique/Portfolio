// styles
import classes from "./stars.module.scss";

// icon
import { RiStarFill, RiStarHalfFill, RiStarLine } from "@remixicon/react";

type TSCORE = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

const Stars = ({ scores }: { scores: TSCORE }) => {
  const renderStars = () => {
    const stars = [];

    // Render full stars
    for (let i = 1; i <= Math.floor(scores); i++) {
      stars.push(<RiStarFill key={i} size={15} />);
    }

    // Render half star if applicable
    if (scores % 1 === 0.5) {
      stars.push(<RiStarHalfFill key="half" size={15} />);
    }

    // Fill the remaining stars with empty stars
    const remainingStars = 5 - Math.ceil(scores);
    for (let i = 1; i <= remainingStars; i++) {
      stars.push(<RiStarLine key={`empty-${i}`} size={15} />);
    }

    return stars;
  };

  return <div className={classes.star_wrapper}>{renderStars()}</div>;
};

export default Stars;
