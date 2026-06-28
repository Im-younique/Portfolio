"use client";

// components
import { LinkText, Accordian, ListBlockquote } from "./components";

export default function FirstDrinkDetail() {
  return (
    <>
      <div className="detail-content-section">
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>
            칵테일 레시피와 바텐딩 정보를 제공하는 서비스를 기획·디자인·개발까지
            단독으로 진행
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            직접 제작해 npm에 배포한 디자인 시스템(younique-ui)을 실제 서비스에
            적용
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            Capacitor를 활용해 웹 서비스를 Android 앱으로 패키징
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            기주(진·보드카·럼·위스키 등) 및 무드 태그 기반의 칵테일 탐색 기능 구현
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            Firebase Hosting으로 실제 배포 및 운영 (쿠팡 파트너스 제휴 연동)
          </ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div className="detail-content-section">
        <h2>사용기술</h2>
        <Accordian.Group>
          <Accordian title="Next.js / React / TypeScript">
            Next.js 16과 React 19 기반으로 서비스를 구축하고, TypeScript로 타입
            안정성을 확보했습니다. App Router를 활용해 페이지를 구성했습니다.
          </Accordian>
          <Accordian title="younique-ui (자체 디자인 시스템)">
            shadcn/ui와 Base UI를 기반으로 직접 제작한 React 컴포넌트
            라이브러리를 npm에 배포하고, 본 프로젝트의 UI 전반에 적용하여 일관된
            디자인과 재사용성을 확보했습니다.
          </Accordian>
          <Accordian title="TailwindCSS">
            TailwindCSS v4를 사용해 빠르고 일관된 스타일링을 구성했습니다.
          </Accordian>
          <Accordian title="Firebase">
            별도의 백엔드 인프라 없이 빠르게 서비스를 운영하기 위해 Firebase를
            도입하여 데이터 관리와 호스팅을 구성했습니다.
          </Accordian>
          <Accordian title="Capacitor">
            Capacitor를 활용해 동일한 웹 코드베이스를 Android 앱으로 패키징하여
            크로스 플랫폼으로 확장했습니다.
          </Accordian>
          <Accordian title="Playwright">
            Playwright로 E2E 테스트를 구성하여 주요 사용자 흐름을 자동으로
            검증할 수 있도록 했습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>주요 기능</h2>
        <Accordian.Group>
          <Accordian title="재료로 찾기">
            진·보드카·럼·위스키·데킬라·브랜디 등 기주를 기준으로 만들 수 있는
            칵테일을 탐색할 수 있도록 구현했습니다.
          </Accordian>
          <Accordian title="태그 기반 탐색">
            #클래식, #여름, #데이트, #달콤한 등 무드·상황별 태그로 칵테일을
            발견할 수 있는 탐색 경험을 제공합니다.
          </Accordian>
          <Accordian title="바텐딩 도구 카탈로그">
            칵테일을 만드는 데 필요한 도구들을 정리해 입문자가 무엇을 갖춰야
            하는지 한눈에 볼 수 있도록 했습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>관련링크</h2>
        <LinkText
          href="https://firstdrink-362e2.web.app/"
          text="첫잔 페이지 바로가기 (운영중)"
        />
      </div>
    </>
  );
}
