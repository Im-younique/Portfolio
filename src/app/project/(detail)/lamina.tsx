"use client";

// components
import { LinkText, Accordian, ListBlockquote } from "./components";

export default function LaminaDetail() {
  return (
    <>
      <div className="detail-content-section">
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>
            PRD·문서·와이어프레임을 입력하면 시스템 플로우부터 화면별 기능명세,
            정책까지 생성하는 AI 기반 기능명세 설계 SaaS(Lamina)를 팀 프로젝트로
            개발
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            api·web·admin으로 나뉜 모노레포 구조에서 웹 프론트엔드 기능 개발과
            이슈 해결에 참여
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            Overview Gate + 6단계 AI 분석 파이프라인의 SSE 진행 상태를 실시간으로
            표시하는 UI 구현
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            ReactFlow·TLDraw·Tiptap 기반의 시스템 플로우·와이어프레임·명세 카드
            에디터를 통합한 편집 경험 구성
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            Docker·Postgres·Redis·MinIO 인프라 위에 실제 서비스로 배포 및 운영
            (laminawork.com)
          </ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div className="detail-content-section">
        <h2>사용기술</h2>
        <Accordian.Group>
          <Accordian title="Next.js / React / TypeScript">
            Next.js 15와 React 기반으로 web·admin 프론트엔드를 구성하고,
            TypeScript로 타입 안정성을 확보했습니다.
          </Accordian>
          <Accordian title="NestJS / Prisma / PostgreSQL">
            NestJS 백엔드와 Prisma ORM, 멀티스키마 PostgreSQL로 AI 파이프라인과
            REST API, 도메인 엔티티를 관리했습니다.
          </Accordian>
          <Accordian title="pnpm Monorepo">
            api·web·admin·core로 구성된 pnpm 워크스페이스 모노레포에서 공용 AI
            에이전트 패키지(@specflow/core)를 공유하며 개발했습니다.
          </Accordian>
          <Accordian title="ReactFlow / TLDraw / Tiptap">
            ReactFlow로 시스템 플로우 노드 그래프, TLDraw로 와이어프레임 캔버스,
            Tiptap으로 명세 카드 리치 에디터를 구현했습니다.
          </Accordian>
          <Accordian title="Docker / Redis / MinIO">
            Docker Compose로 Postgres·Redis·MinIO 인프라를 구성하고 컨테이너로
            서비스를 배포·운영했습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>주요 기능</h2>
        <Accordian.Group>
          <Accordian title="AI 분석 파이프라인">
            입력 소스로부터 요구사항·시스템 플로우·화면 카탈로그·기능명세·정책을
            6단계로 자동 생성하고 진행 상황을 SSE로 스트리밍합니다.
          </Accordian>
          <Accordian title="시스템 플로우 편집">
            ReactFlow 기반 노드 그래프로 화면·액션·조건·권한 등의 흐름을 시각적으로
            편집할 수 있도록 했습니다.
          </Accordian>
          <Accordian title="와이어프레임 & 인터랙티브 미리보기">
            와이어프레임을 자동 생성하고 Mock 데이터와 결합해 인터랙티브 HTML
            프로토타입으로 미리 볼 수 있도록 구성했습니다.
          </Accordian>
          <Accordian title="기능명세 카드">
            데이터·조건·예외·정책·API·검증·테스트케이스·로그 등 여러 블록으로
            구성된 명세 카드를 화면 요소 단위로 작성합니다.
          </Accordian>
          <Accordian title="팀 협업 & Export">
            워크스페이스 기반 팀 리뷰·코멘트와 HTML/Figma/PPT/Linear/Jira로의
            내보내기를 지원합니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>관련링크</h2>
        <LinkText
          href="https://laminawork.com"
          text="Lamina 페이지 바로가기 (운영중)"
        />
      </div>
    </>
  );
}
