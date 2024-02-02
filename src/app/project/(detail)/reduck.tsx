"use client";

// components
import { ImageSlider, LinkText, Accordian, ListBlockquote } from "./components";

// constants
import { REDUCKIMAGE } from "./constants";

export default function ReduckDetail() {
  return (
    <>
      <div className="detail-content-section">
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>
            SSR을 활용하여 사용자 토큰 유지 및 사용자 인증 구현
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            Socket.io, Stomp를 이용하여 웹 채팅 구현
          </ListBlockquote.Text>
          <ListBlockquote.Text>유저 팔로잉 기능 개발</ListBlockquote.Text>
          <ListBlockquote.Text>
            Next버전 13에서 14로 이동시 page router에서 app router로 전환
          </ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div className="detail-content-section">
        <h2>사용기술</h2>
        <Accordian.Group>
          <Accordian title="React">
            프론트엔드 개발인력 모두 익숙한 툴인 React를 선택하였습니다.
            ErrorBoundary를 적용하여 사용자 경험 개선을 위해 노력했습니다.
          </Accordian>
          <Accordian title="Next">
            커뮤니티는 접근성이 좋아야 한다고 생각했고 기술 블로그와 같은 역할을
            하기 때문에 SEO 최적화가 반드시 필요하다고 판단하여 React기반의
            SEO를 최적화 할 수 있는 Next를 선택했습니다.
          </Accordian>
          <Accordian title="TypeScript">
            코드 작성시 타입을 명시함으로써 실수를 줄이고자 TypeScript를
            선택하였습니다. 다만 관리자 사이트는 Material UI Template을 무료로
            활용하기 위해 JavaScript를 사용하였습니다.
          </Accordian>
          <Accordian title="TailwindCSS">ㄴㅇ</Accordian>
          <Accordian title="Light House">
            Light House를 통해 웹 사이트의 성능을 측정하고 더 나은 사용자 경험을
            만들어 갔습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>Demo사진</h2>
        <ImageSlider images={REDUCKIMAGE} />
      </div>
      <div className="detail-content-section">
        <h2>관련링크</h2>
        <LinkText href="https://reduck.site" text="reduck 페이지 바로가기" />
        <LinkText
          href="https://www.npmjs.com/package/tiptap-extension-resize-image"
          text="npm 오픈소스, Tiptap Image Resize"
        />
      </div>
    </>
  );
}
