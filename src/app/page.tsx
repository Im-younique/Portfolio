"use client";

import dynamic from "next/dynamic";

// components
import { Picture, MainFrame } from "@/components/main";
const ThemeToggle = dynamic(() => import("@/components/main/ThemeToggle"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Picture />
      <MainFrame.Container>
        <section>
          <ThemeToggle />
          <span>PortPolio</span>
        </section>
        <MainFrame.Box boxName="expand-about">
          <MainFrame.BoxTitle text_first="ABOUT" text_second="ME" />
          <MainFrame.BoxContent title="ABOUT ME">
            <div>Temp</div>
          </MainFrame.BoxContent>
        </MainFrame.Box>
        <MainFrame.Box boxName="expand-project">
          <MainFrame.BoxTitle text_first="MY" text_second="PROJECT" />
        </MainFrame.Box>
        <MainFrame.Box boxName="expand-guest">
          <MainFrame.BoxTitle text_first="GUEST" text_second="BOOK" />
        </MainFrame.Box>
      </MainFrame.Container>
    </>
  );
}
