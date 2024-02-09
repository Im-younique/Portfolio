"use client";

// components
import { ImageSlider, LinkText, Accordian, ListBlockquote } from "./components";

// constants
import { PORTFOLIOIMAGE } from "./constants";

export default function PortfolioDetail() {
  return (
    <>
      <div className="detail-content-section">
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>(현재 페이지)</ListBlockquote.Text>
          <ListBlockquote.Text>
            Next version 14 업데이트로 인한 개발환경 세팅
          </ListBlockquote.Text>
          <ListBlockquote.Text>다크/화이트모드 구현</ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div className="detail-content-section">
        <h2>사용기술</h2>
        <Accordian.Group>
          <Accordian title="React">
            Next를 활용하기 위해서 React를 선택하였습니다.
          </Accordian>
          <Accordian title="Next">
            포트폴리오 페이지는 저를 대표하는 페이지가 되었으면 좋을 것 같아
            검색시 노출될 수 있도록 SEO 최적화를 진행할 예정입니다. 그렇기
            때문에 Next를 선택하였습니다.
          </Accordian>
          <Accordian title="TypeScript">
            코드 작성시 타입을 명시함으로써 실수를 줄이고자 TypeScript를
            선택하였습니다.
          </Accordian>
          <Accordian title="SCSS">
            SCSS를 간간히 사용해왔지만 제대로 알지 못해 스타일링이 많이
            필요하다고 생각된 이번 기회에 공부하고자 도입하였습니다. 모듈화 관련
            및 다크모드 설정 등을 분리하여 도입했습니다.
          </Accordian>
          <Accordian title="Vercel">
            Next의 간편한 호스팅을 사용하기 위해 Vercel 호스팅을 사용했습니다.
          </Accordian>
          <Accordian title="Postgre">
            Vercel에서 storage를 무료로 제공하는 것을 발견하고 PostgreSQL을
            이용하여 방명록을 구현하였고 별도로 다른 저장소를 사용하지 않아도
            됐습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>Demo사진</h2>
        <ImageSlider images={PORTFOLIOIMAGE} />
      </div>
      <div className="detail-content-section">
        <h2>관련링크</h2>
        <LinkText href="/" text="메인 페이지 바로가기" />
        <LinkText
          href="https://www.reduck.site/board/6dbb9be3-50a9-4502-9ecc-ff10cb4451dd"
          text="환경세팅 포스팅"
        />
        <LinkText
          href="https://www.reduck.site/board/7d19dce3-df32-4be3-8129-33bfad8e52b3"
          text="다크모드 적용기 포스팅"
        />
        <LinkText
          href="https://github.com/Im-younique/Portfolio"
          text="Github Repository"
        />
      </div>
    </>
  );
}
