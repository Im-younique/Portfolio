"use client";

// components
import { ImageSlider, LinkText, Accordian, ListBlockquote } from "./components";

// constants
import { CULTUREIMAGE } from "./constants";

export default function CultureDetail() {
  return (
    <>
      <div className="detail-content-section">
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>미로 게임 구현</ListBlockquote.Text>
          <ListBlockquote.Text>
            스코어 기록 추가 및 스코어보드 제작
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            기존 IP주소 접근에서 DNS접근으로 변경
          </ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div className="detail-content-section">
        <h2>사용기술</h2>
        <Accordian.Group>
          <Accordian title="HTML">
            기존 동아리 선후배 동기들이 제작한 홈페이지를 이어 새로운 기능 추가
            및 보완작업을 진행했습니다. 그렇기 때문에 기존에 사용된 언어, 기술을
            그대로 사용했습니다.
          </Accordian>
          <Accordian title="CSS">
            기존 동아리 선후배 동기들이 제작한 홈페이지를 이어 새로운 기능 추가
            및 보완작업을 진행했습니다. 그렇기 때문에 기존에 사용된 언어, 기술을
            그대로 사용했습니다.
          </Accordian>
          <Accordian title="JavaScript">
            기존 동아리 선후배 동기들이 제작한 홈페이지를 이어 새로운 기능 추가
            및 보완작업을 진행했습니다. 그렇기 때문에 기존에 사용된 언어, 기술을
            그대로 사용했습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>Demo사진</h2>
        <ImageSlider images={CULTUREIMAGE} />
      </div>
      <div className="detail-content-section">
        <h2>관련링크</h2>
        <LinkText
          href="https://culture.argos.or.kr/index.html"
          text="홈페이지 바로가기 (계약만료)"
        />
        <LinkText
          href="https://github.com/4RG0S/2021-web-creation-volunteer"
          text="Github Repository"
        />
      </div>
    </>
  );
}
