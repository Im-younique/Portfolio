"use client";

import { useState } from "react";

import Group from "./Group";

import clasees from "./accordian.module.scss";

import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";

const Accordian = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={`${clasees.container} ${open && clasees.opend}`}>
      <section
        className={clasees.titleBox}
        onClick={() => setOpen((prev) => !prev)}
      >
        <h2>Title</h2>
        {open ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </section>
      <section
        className={`${clasees.contentBox} ${open && clasees.contentBoxOpen}`}
      >
        <p>Content</p>
      </section>
    </div>
  );
};

Accordian.Group = Group;

export default Accordian;
