"use client";

// components
import { LinkText, Accordian, ListBlockquote } from "./components";

export default function RainmakerDetail() {
  return (
    <>
      <div className="detail-content-section">
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>
            AI로 영업 문서(견적서·계약서·NDA·제안서)를 생성하고, 웹 에디터로
            편집한 뒤 이메일로 발송하는 AI 영업 문서 자동화 SaaS RAINMAKER를 팀
            프로젝트로 개발
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            영업 담당자 포털과 관리자 콘솔 두 개의 콘솔을 24개 화면 규모로 설계·구현
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            블록 기반 웹 문서 에디터와 폴더 단위 드래그 정렬을 지원하는 문서
            보관함 구현
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            크레딧 지갑·거래내역 기반 요금 모델과 팀 발신 도메인 인증 구조 설계
          </ListBlockquote.Text>
          <ListBlockquote.Text>
            react-doctor 정적 분석을 PR 자동 리뷰·pre-push 훅으로 통합해 코드
            품질 게이트를 구축
          </ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div className="detail-content-section">
        <h2>사용기술</h2>
        <Accordian.Group>
          <Accordian title="Next.js / React / TypeScript">
            Next.js 16과 React 19 기반으로 App Router를 활용해 서비스를 구성하고,
            TypeScript로 타입 안정성을 확보했습니다.
          </Accordian>
          <Accordian title="TailwindCSS / shadcn/ui">
            TailwindCSS v4와 shadcn/ui를 조합해 두 콘솔에 일관된 디자인 시스템을
            빠르게 적용했습니다.
          </Accordian>
          <Accordian title="SQLite / Prisma 7">
            better-sqlite3 드라이버 어댑터를 사용한 SQLite와 Prisma 7 ORM으로
            문서·폴더·크레딧·메일 도메인 등 도메인 모델을 관리했습니다.
          </Accordian>
          <Accordian title="REST API">
            App Router의 Route Handler로 문서·생성·발송·폴더·크레딧·메일 도메인
            등 REST API를 구현했습니다.
          </Accordian>
          <Accordian title="react-doctor / CI">
            react-doctor로 React 코드의 보안·성능·정확성을 정적 분석하고, GitHub
            Actions PR 리뷰와 husky pre-push 훅으로 품질 게이트를 자동화했습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>주요 기능</h2>
        <Accordian.Group>
          <Accordian title="AI 문서 생성기">
            첨부·참고문서를 반영해 영업 문서를 생성하고, 생성 시 크레딧을
            차감하는 흐름을 구현했습니다.
          </Accordian>
          <Accordian title="웹 문서 에디터">
            블록 캔버스 형태의 에디터로 생성된 문서를 웹에서 바로 편집할 수
            있도록 했습니다.
          </Accordian>
          <Accordian title="이메일 발송 & 메일 템플릿">
            문서를 이메일로 발송하고 발송 이력을 기록하며, 메일 템플릿·서명을
            관리할 수 있도록 구성했습니다.
          </Accordian>
          <Accordian title="문서 보관함">
            내 문서함·공용문서함과 폴더 구조를 제공하고, 폴더 순서 변경·이동을
            지원했습니다.
          </Accordian>
          <Accordian title="관리자 콘솔">
            팀원 관리·마스터 데이터·요금/크레딧·브랜딩·통계 리포트를 다루는 관리자
            콘솔을 구현했습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>관련링크</h2>
        <LinkText
          href="https://github.com/JR-STUDY/Deal-Closer"
          text="Github Repository"
        />
      </div>
    </>
  );
}
