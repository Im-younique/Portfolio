import Link from "next/link";

import classes from "./linkText.module.scss";

import { RiLink } from "@remixicon/react";

interface IProp {
  text: string;
  href: string;
}

export default function LinkText({ text, href }: IProp) {
  return (
    <Link href={href} target="_blank" className={classes.wrapper}>
      <RiLink />
      <span className={classes.text}>{text}</span>
    </Link>
  );
}
