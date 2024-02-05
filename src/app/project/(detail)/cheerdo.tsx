"use client";

// components
import { ImageSlider, LinkText, Accordian, ListBlockquote } from "./components";

// constants
import { CHEERDOIMAGE } from "./constants";

export default function CheerdoDetail() {
  return (
    <>
      <div className="detail-content-section">
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>ReactJS로 웹앱 구현</ListBlockquote.Text>
          <ListBlockquote.Text>
            라이브러리 사용 지양한 자체 애니매이션 및 기능 구현
          </ListBlockquote.Text>
          <ListBlockquote.Text> https 적용 (로컬포함)</ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div className="detail-content-section">
        <h2>사용기술</h2>
        <Accordian.Group>
          <Accordian title="React">
            SW Academy에서 기초부터 다시 배우게 된 리액트를 활용해보기 위해
            사용헸습니다.
          </Accordian>
          <Accordian title="JavaScript">
            SW Academy에서 배운 JavaScript 문법을 활용하고 수업에서 함께
            제작했던 컴포넌트를 활용하기 위해서 사용했습니다.
          </Accordian>
          <Accordian title="SCSS">
            애니매이션 구현 및 컬러 적용을 좀 더 용이하게 하기 위해 SCSS를
            적용했습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>Demo사진</h2>
        <ImageSlider images={CHEERDOIMAGE} isMobile={true} />
      </div>
      <div className="detail-content-section">
        <h2>관련링크</h2>
        <LinkText href="https://youtu.be/SrWSxm_QHXU" text="Demo 영상" />
        <LinkText
          href="https://www.figma.com/file/eOjXOsdNDWDm6f2yBn9i1W/Prototype-Design?type=design&node-id=0%3A1&mode=design&t=V6TqxXOGoleUjO3M-1"
          text="Figma Design"
        />
      </div>
    </>
  );
}
