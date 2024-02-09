"use client";

// components
import { ImageSlider, LinkText, Accordian, ListBlockquote } from "./components";

// constants
import { MUSICIMAGE } from "./constants";

export default function CnmusicDetail() {
  return (
    <>
      <div className="detail-content-section">
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>HTML CSS 템플릿 변경 수정</ListBlockquote.Text>
          <ListBlockquote.Text>게시판 기능 구현</ListBlockquote.Text>
          <ListBlockquote.Text>
            후년도 페이지 업데이트 및 재사용
          </ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div className="detail-content-section">
        <h2>사용기술</h2>
        <Accordian.Group>
          <Accordian title="HTML">
            웹 프로그래밍을 학습하면서 진행했던 프로젝트이기 때문에 기초적인
            HTML을 사용했고 템플릿을 보고 이해하기 위해 학습을 하다보니 도움이
            많이됐습니다.
          </Accordian>
          <Accordian title="CSS">
            HTML과 마찬가지로 템플릿을 보고 이해하기 위해 학습을 하다보니 다양한
            CSS 코드의 사용 및 역할에 대해서 알아갈 수 있었고 필요한 부분만
            수정하면서 작업했습니다.
          </Accordian>
          <Accordian title="BoothStrap">
            CSS 템플릿의 BoothStrap이 사용되었기 때문에 이를 기반하여 스타일링을
            작성하였습니다.
          </Accordian>
          <Accordian title="JavaScript">
            템플릿의 UI에 의존했지만 웹 프로그래밍에서 배운 지식을 기반으로
            Vanila JavaScript와 일부 JQuery 코드를 작성했습니다.
          </Accordian>
          <Accordian title="AWS">
            홍보용 홈페이지였기 때문에 웹상에 게시해야했고 처음으로 AWS를
            사용하여 호스팅을 진행했습니다. pemkey관리 및 원격접속 및 정적
            웹페이지 호스팅 방법을 배울 수 있었습니다
          </Accordian>
          <Accordian title="Firebase">
            게시판과 같은 저장소가 필요한 페이지에 Firebase Firestore를 사용하여
            저장하고 불러오기 기능을 활용했습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>Demo사진</h2>
        <ImageSlider images={MUSICIMAGE} />
      </div>
      <div className="detail-content-section">
        <h2>관련링크</h2>
        <LinkText
          href="https://github.com/Im-younique/ChungNamFesta_page/tree/master"
          text="Github Repository"
        />
      </div>
    </>
  );
}
