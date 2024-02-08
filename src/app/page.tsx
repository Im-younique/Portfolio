// components
import { Picture, MainFrame, SideSetting } from "@/components/main";

import About from "@/components/about";
import ProjectList from "@/components/project-list";
import GuestBook from "@/components/guest-book";

// constants
import { PROJECTLIST } from "@/constants";

export default function Home() {
  return (
    <>
      <Picture />
      <SideSetting />
      <MainFrame.Container>
        <MainFrame.BoxLeftTop>
          <span>안녕하세요 저는</span>
          <h2>
            임동윤<span> 입니다.</span>
          </h2>
          <span>Front-end Developer</span>
        </MainFrame.BoxLeftTop>
        <MainFrame.Box boxName="about me">
          <MainFrame.BoxTitle title="about me" />
          <MainFrame.BoxContent title="about me" icon_name="profile">
            <About.Personal />
            <About.Resume />
            <About.Badge />
          </MainFrame.BoxContent>
        </MainFrame.Box>
        <MainFrame.Box boxName="my project">
          <MainFrame.BoxTitle title="my project" />
          <MainFrame.BoxContent title="my project" icon_name="bag">
            <ProjectList.Container>
              {PROJECTLIST.map((val) => (
                <ProjectList.Box key={val.name} {...val} />
              ))}
            </ProjectList.Container>
          </MainFrame.BoxContent>
        </MainFrame.Box>
        <MainFrame.Box boxName="guest book">
          <MainFrame.BoxTitle title="guest book" />
          <MainFrame.BoxContent title="guest book" icon_name="book">
            <GuestBook />
          </MainFrame.BoxContent>
        </MainFrame.Box>
      </MainFrame.Container>
    </>
  );
}
