"use client";

// components
import { ImageSlider, LinkText, Accordian, ListBlockquote } from "./components";

// constants
import { WEEKIPIMAGE } from "./constants";

export default function WeekipDetail() {
  return (
    <>
      <div className="detail-content-section">
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>
            weekip.co (유저사이트), weekip.me/admin (관리자 사이트)의 기획부터
            프론트엔드 개발까지 단독 수행 (마케팅·콘텐츠는 별도 인력 담당)
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            유저사이트에서 200명 트래픽 획득 (Google Analytics 기반)
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            관리자 사이트 개발시, Tiptap Editor를 확장한 경험을 바탕으로 npm
            오픈소스 배포
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            초기 lighthouse 퍼포먼스 점수 50점 → 92점으로 향상
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            서비스 소개 페이지 인터렉티브 웹페이지 디자인으로 개발
          </ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div className="detail-content-section">
        <h2>사용기술</h2>
        <Accordian.Group>
          <Accordian title="React">
            빠른 개발을 위해 제게 가장 익숙한 툴인 React를 선택하였습니다.
            나아가 ErrorBoundary를 적용하며 사용자 경험 개선에 노력했습니다.
          </Accordian>
          <Accordian title="Next">
            유저 사이트의 SEO를 통한 사이트 검색용이를 위해 Next를 선택하여
            SSR을 활용하였습니다.
          </Accordian>
          <Accordian title="TypeScript && JavaScript">
            코드 작성시 타입을 명시함으로써 실수를 줄이고자 TypeScript를
            선택하였습니다. 다만 관리자 사이트는 Material UI Template을 무료로
            활용하기 위해 JavaScript를 사용하였습니다.
          </Accordian>
          <Accordian title="Material UI">
            인력이 부족했기 때문에 관리자 사이트의 디자인은 Material 무료 템플릿
            디자인을 활용하여 개발을 용이하게 했습니다.
          </Accordian>
          <Accordian title="Firebase">
            초기 웹사이트의 비용절감을 위해 Firebase를 선택하였고 전문 백엔드
            개발자가 없는 문제점을 해결할 수 있었습니다. 더하여 간단한
            설정만으로 보안성 뿐만 아니라 푸쉬알림, 예약배포, 가비지 컬렉터 등의
            기능을 구현할 수 있었습니다.
          </Accordian>
          <Accordian title="Elastic Search">
            Firebase의 단점인 부족한 텍스트 검색 지원을 보완하고자 검색기능을
            개발할 때 Elastic Search를 사용하여 더 빠른 컨텐츠 검색을
            지원하였습니다.
          </Accordian>
          <Accordian title="Google Analystics">
            Google Analytics를 활용하여 사용자의 웹사이트 내 활동을 추적하고
            Google Search console과 네이버 서치 어드바이저를 이용하여 사용자의
            접속경로를 추적하여 콘텐츠의 개선방향 및 SEO 최적화를 위해
            노력했습니다.
          </Accordian>
          <Accordian title="Light House">
            Light House를 통해 웹 사이트의 성능을 측정하고 더 나은 사용자 경험을
            만들어 갔습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>주요 기여</h2>
        <Accordian.Group>
          <Accordian title="Lighthouse 성능 최적화 (50 → 92)">
            LCP에 영향을 주는 핵심 이미지를 우선 렌더링하도록 세분화하고,
            나머지 이미지에는 lazy-loading을 적용했습니다. 또한 스켈레톤 UI를
            도입해 데이터 로딩 후 요소 위치가 밀리는 레이아웃 시프트(CLS)를
            최소화하여 체감 성능과 점수를 함께 끌어올렸습니다.
          </Accordian>
          <Accordian title="Tiptap 이미지 리사이즈 오픈소스 배포">
            관리자 사이트의 에디터 기능을 개발하며 Tiptap 이미지 리사이즈
            확장을 직접 구현했고, npm에 오픈소스로 공개해 다른 프로젝트에서도
            재사용할 수 있도록 했습니다.
          </Accordian>
          <Accordian title="Firebase 기반 백엔드 부재 해결">
            전문 백엔드 개발자가 없는 상황에서 Firebase를 도입해 인증·보안·푸시
            알림·예약 배포를 직접 구성했고, Firebase의 약한 텍스트 검색을 Elastic
            Search로 보완해 콘텐츠 검색 품질을 확보했습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>Demo사진</h2>
        <ImageSlider images={WEEKIPIMAGE} />
      </div>
      <div className="detail-content-section">
        <h2>관련링크</h2>
        <LinkText
          href="https://www.weekip.co"
          text="weekip 페이지 바로가기 (deprecated)"
          disabled
        />
        <LinkText
          href="https://www.npmjs.com/package/tiptap-extension-resize-image"
          text="npm 오픈소스, Tiptap Image Resize"
        />
      </div>
    </>
  );
}
