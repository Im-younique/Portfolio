"use client";

// components
import { ImageSlider, Accordian, ListBlockquote } from "./components";

// constants
import { KMWINEIMAGE } from "./constants";

export default function OneKmwineDetail() {
  return (
    <>
      <div className="detail-content-section">
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>와인 재고관리 기능 구현</ListBlockquote.Text>
          <ListBlockquote.Text>와인 검색 기능 구현</ListBlockquote.Text>
          <ListBlockquote.Text>환경설정 기능 구현</ListBlockquote.Text>
          <ListBlockquote.Text>문의 기능 구현</ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div className="detail-content-section">
        <h2>사용기술</h2>
        <Accordian.Group>
          <Accordian title="React">
            React를 기반으로 모든 프로젝트들이 구현되는 중이었고, PC
            Vendor버전을 웹 모바일 버전으로 이식하는 작업이었기 때문에
            프로젝트를 재활용 할 수 있도록 React가 사용됐습니다.
          </Accordian>
          <Accordian title="JavaScript">
            JavaScript를 기반으로 모든 프로젝트들이 구현되는 중이었고, PC
            Vendor버전을 웹 모바일 버전으로 이식하는 작업이었기 때문에
            프로젝트를 재활용할 수 있도록 JavaScript를 사용했습니다. 대신 eslint
            및 props 타입명시를 하여 실수를 방지했습니다.
          </Accordian>
          <Accordian title="Material Design">
            PC Vendor버전에서 Material UI 템플릿을 사용했기 때문에, Material
            Design으로 모바일도 통일감있게 구성하였습니다.
          </Accordian>
          <Accordian title="Firebase">
            Firebase를 직접 다루진 않았지만 DB를 찾아보면서 응답형태 파악 및 UI
            구성을 용이하게 할 수 있었습니다.
          </Accordian>
          <Accordian title="Elastic Search">
            와인 검색 기능을 구현할 때 Firebase의 단점을 보완하기 위해 Elastic
            Search를 사용하였습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>Demo사진</h2>
        <ImageSlider images={KMWINEIMAGE} isMobile={true} />
      </div>
    </>
  );
}
