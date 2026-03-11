"use client";

// components
import { Accordian, ListBlockquote } from "./components";

export default function OfficekeeperDetail() {
  return (
    <>
      <div className="detail-content-section">
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>
            OKEP 관리자 웹사이트 프론트엔드 개발
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            OK3 서비스 운영 및 관리자 로그아웃 타이머, 알아두세요 개편 등의 신규
            기능 개발
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            Playwright 기반 E2E 테스트 자동화 체계 구축
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            비식별 워터마크 기능 설계 및 개발
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            크로스팀 코드리뷰 문화 기획 및 정착
          </ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div className="detail-content-section">
        <h2>사용기술</h2>
        <Accordian.Group>
          <Accordian title="React/Next.js">
            기존 OK3 관리자 페이지의 레거시 코드를 개선하고, OK5 신규 관리자
            페이지를 React 기반으로 개발했습니다. 컴포넌트 설계와 상태 관리에
            집중하여 유지보수성을 높였습니다.
          </Accordian>
          <Accordian title="TypeScript">
            전체 프로젝트에 TypeScript를 적용하여 타입 안정성을 확보하고, API
            응답 타입 정의를 통해 런타임 에러를 최소화했습니다.
          </Accordian>
          <Accordian title="Playwright">
            핵심 페이지에 대한 E2E 테스트를 작성하여 배포 전 자동 검증 체계를
            구축했습니다. 관리자 계정 잠금, 에이전트 보호정책, IP 접속제한 등
            주요 시나리오를 커버합니다.
          </Accordian>
          <Accordian title="PHP/CodeIgniter/Laravel">
            OK3 관리자 페이지 및 백오피스 기능의 레거시 코드를 유지보수하며, VOC
            처리 및 신규 기능 등을 개발하였습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>주요 기여</h2>
        <Accordian.Group>
          <Accordian title="워터마크 미리보기">
            Canvas API를 활용하여 워터마크 미리보기 기능을 개발했습니다. 텍스트,
            이미지, QR 등 사용되는 워터마크를 미리 볼 수 있도록 하며 각도 및
            크기 설정 등 삼각함수를 이용하여 실제 출력과 유사한 미리보기 기능을
            제공했습니다.
          </Accordian>
          <Accordian title="비식별 워터마크">
            사용자 눈에 보이지 않는 비식별 워터마크 기능을 OfficeKeeper 내
            도입하기 위해 외부 협력사와 협업하여 기능을 설계하고 내부 시스템에
            핵심 신규 기능을 추가했습니다.
          </Accordian>
          <Accordian title="크로스팀 코드리뷰">
            GitLab webhook과 사내 메신저(오피스 챗)의 알림 시스템을 연동하여 MR
            알림 및 코멘트 알림 등을 구현하고, 팀 내 코드리뷰 프로세스를
            제안하여 문화로 정착시켰습니다. 약 1년간 288건의 MR을 승인하고
            462건의 코멘트를 작성하며 팀 전체의 코드 품질 향상에 기여했습니다.
          </Accordian>
        </Accordian.Group>
      </div>
    </>
  );
}
