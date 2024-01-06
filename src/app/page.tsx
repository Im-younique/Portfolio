// "use client";

import dynamic from "next/dynamic";

// components
import { Picture, MainFrame } from "@/components/main";
// import ThemeToggle from "@/components/main/ThemeToggle";
const ThemeToggle = dynamic(() => import("@/components/main/ThemeToggle"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Picture />
      <ThemeToggle />
      <MainFrame.Container>
        <section>
          <span>PortPolio</span>
        </section>
        <MainFrame.Box>
          <MainFrame.BoxTitle text_first="ABOUT" text_second="ME" />
        </MainFrame.Box>
        <MainFrame.Box>
          <MainFrame.BoxTitle text_first="MY" text_second="PROJECT" />
        </MainFrame.Box>
        <MainFrame.Box>
          <MainFrame.BoxTitle text_first="GUEST" text_second="BOOK" />
        </MainFrame.Box>
      </MainFrame.Container>
    </>
  );
}
