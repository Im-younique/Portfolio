import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

// styles
import classes from "./box.module.scss";

// types
import { IProjectList } from "@/types";

const Box = ({ href, src, name }: IProjectList) => {
  const [position, setPosition] = useState<any>(classes.top);
  const [isHover, setIsHover] = useState(false);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const calculateMousePosition = (e: React.MouseEvent, isIn: boolean) => {
    if (linkRef.current !== null) {
      const targetRect = linkRef.current.getBoundingClientRect();

      const leftORright =
        Math.abs(e.clientX - targetRect.right) >
        Math.abs(e.clientX - targetRect.left)
          ? "left"
          : "right";
      const topORbottom =
        Math.abs(e.clientY - targetRect.top) >
        Math.abs(e.clientY - targetRect.bottom)
          ? "bottom"
          : "top";

      if (leftORright === "left" && topORbottom === "top") {
        Math.abs(e.clientX - targetRect.left) >
        Math.abs(e.clientY - targetRect.top)
          ? setPosition(classes.top)
          : setPosition(classes.left);
      } else if (leftORright === "left" && topORbottom === "bottom") {
        Math.abs(e.clientX - targetRect.left) >
        Math.abs(e.clientY - targetRect.bottom)
          ? setPosition(classes.bottom)
          : setPosition(classes.left);
      } else if (leftORright === "right" && topORbottom === "top") {
        Math.abs(e.clientX - targetRect.right) >
        Math.abs(e.clientY - targetRect.top)
          ? setPosition(classes.top)
          : setPosition(classes.right);
      } else if (leftORright === "right" && topORbottom === "bottom") {
        Math.abs(e.clientX - targetRect.right) >
        Math.abs(e.clientY - targetRect.bottom)
          ? setPosition(classes.bottom)
          : setPosition(classes.right);
      }
    }
    setIsHover(isIn);
  };

  return (
    <div className={classes.box}>
      <Link
        href={href}
        className={`${classes.link} ${
          isHover ? classes.mouseEnter : classes.mouseLeave
        } ${position}`}
        ref={linkRef}
        onMouseEnter={(e) => calculateMousePosition(e, true)}
        onMouseLeave={(e) => calculateMousePosition(e, false)}
      >
        <Image
          src={src}
          alt="project-image"
          width={535}
          height={400}
          className={classes.img}
        />
        <div className={`${classes.logo_wrapper}`}>
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
};

export default Box;
