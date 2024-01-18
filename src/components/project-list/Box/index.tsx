import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

// styles
import classes from "./box.module.scss";

// types
import { IProjectList } from "@/types";

const Box = ({ href, src, name }: IProjectList) => {
  const [position, setPosition] = useState<any>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const calculateMouseInPosition = (e: React.MouseEvent) => {
    if (linkRef.current !== null) {
      const targetRect = linkRef.current.getBoundingClientRect();
      const mouseX = e.clientX - targetRect.left;
      const mouseY = e.clientY - targetRect.top;

      const divCenterX = targetRect.width / 2;
      const divCenterY = targetRect.height / 2;

      const deltaX = mouseX - divCenterX;
      const deltaY = mouseY - divCenterY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          setPosition(classes.right);
        } else {
          setPosition(classes.left);
        }
      } else {
        if (deltaY > 0) {
          setPosition(classes.bottom);
        } else {
          setPosition(classes.top);
        }
      }
    }
  };

  const calculateMouseOutPosition = (e: React.MouseEvent) => {
    if (linkRef.current !== null) {
      const targetRect = linkRef.current.getBoundingClientRect();

      const mouseX = e.clientX - targetRect.left;
      const mouseY = e.clientY - targetRect.top;

      const divCenterX = targetRect.width / 2;
      const divCenterY = targetRect.height / 2;

      const deltaX = mouseX - divCenterX;
      const deltaY = mouseY - divCenterY;

      // 마우스가 나간 방향을 출력
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          setPosition(classes.right);
        } else {
          setPosition(classes.left);
        }
      } else {
        if (deltaY > 0) {
          setPosition(classes.bottom);
        } else {
          setPosition(classes.top);
        }
      }
    }
  };

  return (
    <div className={classes.box}>
      <Link
        href={href}
        className={classes.link}
        ref={linkRef}
        onMouseEnter={calculateMouseInPosition}
        onMouseLeave={calculateMouseOutPosition}
      >
        <Image
          src={src}
          alt="project-image"
          width={535}
          height={400}
          className={classes.img}
        />
        <div className={`${classes.logo_wrapper} ${position}`}>
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
};

export default Box;
