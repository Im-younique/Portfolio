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
        <MainFrame.Box>
          <span>PortPolio</span>
        </MainFrame.Box>
        <MainFrame.Box>2</MainFrame.Box>
        <MainFrame.Box>3</MainFrame.Box>
        <MainFrame.Box>4</MainFrame.Box>
      </MainFrame.Container>
    </>
  );
}
