"use client";

import { ReactNode, useState } from "react";

import Group from "./Group";

import clasees from "./accordian.module.scss";

import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";

interface IProp {
  title: string;
  children: React.ReactNode | string;
}

const Accordian = ({ title, children }: IProp) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={`${clasees.container} ${open && clasees.opend}`}>
      <section
        className={clasees.titleBox}
        onClick={() => setOpen((prev) => !prev)}
      >
        <h3>{title}</h3>
        {open ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </section>
      <section
        className={`${clasees.contentBox} ${open && clasees.contentBoxOpen}`}
      >
        <p>{children}</p>
      </section>
    </div>
  );
};

Accordian.Group = Group;

export default Accordian;
