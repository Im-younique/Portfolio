import Link from "next/link";
import Image from "next/image";

// styles
import classes from "./box.module.scss";

// types
import { IProjectList } from "@/types";

const Box = ({ href, src, name }: IProjectList) => {
  return (
    <div className={classes.box}>
      <Link href={href} className={classes.link}>
        <Image
          src={src}
          alt="project-image"
          width={535}
          height={400}
          className={classes.img}
        />
        <div>{name}</div>
      </Link>
    </div>
  );
};

export default Box;
