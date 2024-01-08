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
        <MainFrame.Box boxName="about me">
          <MainFrame.BoxTitle title="about me" />
          <MainFrame.BoxContent title="about me" icon_name="profile">
            <div>Temp</div>
          </MainFrame.BoxContent>
        </MainFrame.Box>
        <MainFrame.Box boxName="my project">
          <MainFrame.BoxTitle title="my project" />
          <MainFrame.BoxContent title="my project" icon_name="bag">
            <div>Temp</div>
          </MainFrame.BoxContent>
        </MainFrame.Box>
        <MainFrame.Box boxName="guest book">
          <MainFrame.BoxTitle title="guest book" />
          <MainFrame.BoxContent title="guest book" icon_name="book">
            <div>Temp</div>
          </MainFrame.BoxContent>
        </MainFrame.Box>
      </MainFrame.Container>
    </>
  );
}
