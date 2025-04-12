import Link from "next/link";

import classes from "./linkText.module.scss";

import { RiLink } from "@remixicon/react";

interface IProp {
  text: string;
  href: string;
  disabled?: boolean;
}

export default function LinkText({ text, href, disabled }: IProp) {
  return (
    <Link
      href={href}
      target="_blank"
      className={disabled ? classes.wrapper_lineThrough : classes.wrapper}
    >
      <RiLink />
      <span className={classes.text}>{text}</span>
    </Link>
  );
}
