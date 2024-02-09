"use client";

// components
import { ImageSlider, LinkText, Accordian, ListBlockquote } from "./components";

// constants
import { MOONDIARYIMAGE } from "./constants";

export default function MoonDiaryDetail() {
  return (
    <>
      <div className="detail-content-section">
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>
            ReactNative + Expo 활용 앱 개발
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            Linux 기반 클라우드 서버 생성 및 환경세팅
          </ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div className="detail-content-section">
        <h2>사용기술</h2>
        <Accordian.Group>
          <Accordian title="ReactNative">
            온라인 강의로 배운 React를 활용해 보기위해 React를 선택했고 모바일
            어플리케이션 개발을 위해 ReactNative를 선택했습니다.
          </Accordian>
          <Accordian title="Expo">
            PC에서 구현한 화면은 실제 모바일화면에서 바로 확인하기 위해 Expo를
            사용했지만 이 외에 빌드 과정이나 추가 기능들을 사용하기
            용이했습니다.
          </Accordian>
          <Accordian title="JavaScript">
            React를 사용하기 위해 JavaScript를 사용했습니다.
          </Accordian>
          <Accordian title="Oracle Cloud">
            클라우드 서버를 운용하기 위해 AWS를 사용하려 했으나 1년 프리티어
            기간이 지나 무료 클라우드 서비스를 찾다 Oracle Cloud를 발견했고 무료
            사용기간 제한도 없어 선택했습니다. AI기능을 사용하기 위해서 프리티어
            사양만으로는 부족해 On-promise로 클라우드 환경을 구축한 서버 피시를
            같이 활용했습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>Demo사진</h2>
        <ImageSlider images={MOONDIARYIMAGE} isMobile={true} />
      </div>
      <div className="detail-content-section">
        <h2>관련링크</h2>
        <LinkText
          href="https://www.youtube.com/watch?v=iWvQc5HtSjM&ab_channel=iIT23"
          text="Demo 영상"
        />
        <LinkText
          href="https://www.figma.com/file/9yzUdCBfxn7Q61nWsIe9Md/IT23-SiliconValleyIntership?type=design&node-id=0%3A1&mode=design&t=bH5C8PIGS3UUwX3f-1"
          text="Figma Design"
        />
        <LinkText
          href="https://www.notion.so/IT23-a2242e241dfb483db7c65d24447f6faa?pvs=4"
          text="팀 Notion"
        />
        <LinkText
          href="https://github.com/2022-SiliconValleyInternship-IT23"
          text="Github Organization"
        />
      </div>
    </>
  );
}
