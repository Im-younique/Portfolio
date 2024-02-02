"use client";

// components
import { ImageSlider, LinkText, Accordian, ListBlockquote } from "./components";

// constants
import { WEEKIPIMAGE } from "./constants";

export default function WeekipDetail() {
  return (
    <>
      <div>
        <h2>Demo사진</h2>
        <ImageSlider images={WEEKIPIMAGE} />
      </div>
      <div>
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>aa</ListBlockquote.Text>
          <ListBlockquote.Text>bb</ListBlockquote.Text>
          <ListBlockquote.Text>cc</ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div>
        <h2>관련링크</h2>
        <LinkText href="https://www.weekip.co" text="weekip 페이지 바로가기" />
      </div>
      <div>
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
            Firebase의 단점인 인덱싱을 통한 빠른 검색을 할 수 없는 기술적한계를
            극복하기위해 검색기능을 개발할 때 Elastic Search를 사용하여 더 빠른
            컨텐츠 검색을 지원하였습니다.
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
      <div>
        <h2>느낀점?</h2>
      </div>
    </>
  );
}
