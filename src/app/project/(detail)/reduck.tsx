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
            SockJS, Stomp를 이용하여 웹 채팅 구현
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
            이전까지 JavaScript만으로 개발했지만 트렌드의 변환에 맞춰
            TypeScript를 배우면서 적용하고자 도입하였습니다. 코드 작성시 타입을
            명시함으로써 실수가 줄어들고 협업과정에서 코드를 확인하기 편하다는
            것을 깨닫게 됐습니다.
          </Accordian>
          <Accordian title="TailwindCSS">
            초기 디자이너가 없이 프로젝트를 시작했기 때문에 간편하게 스타일링 할
            수 있는 TailwindCSS를 선택했습니다. 현재는 디자이너가 추가되어
            TailwindCSS 설정 및 확장으로 변경하여 스타일을 적용 중 입니다.
          </Accordian>
          <Accordian title="Story book">
            UI 컴포넌트들을 테스팅하고 협업하여 만들어진 컴포넌트를 관리하고
            알아보기 편하게 하기 위해 사용했습니다.
          </Accordian>
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
        <LinkText
          href="https://github.com/re-Duck"
          text="Github Organization"
        />
      </div>
    </>
  );
}
