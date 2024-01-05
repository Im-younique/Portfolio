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
      <MainFrame.Container>
        <MainFrame.Box>
          <h1>PortPolio</h1>
        </MainFrame.Box>
        <ThemeToggle />
      </MainFrame.Container>
    </>
  );
}
