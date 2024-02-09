"use client";

// components
import { ImageSlider, LinkText, Accordian, ListBlockquote } from "./components";

// constants
import { BOOTHIMAGE } from "./constants";

export default function BoothStampDetail() {
  return (
    <>
      <div className="detail-content-section">
        <h2>성과</h2>
        <ListBlockquote.Container>
          <ListBlockquote.Text>
            Flutter, Dart 개발 교육 진행
          </ListBlockquote.Text>
          <ListBlockquote.Text>Demo앱 개발, 웹 배포</ListBlockquote.Text>
          <ListBlockquote.Text>
            AI-SW Festival 행사 운영에 사용
          </ListBlockquote.Text>
        </ListBlockquote.Container>
      </div>
      <div className="detail-content-section">
        <h2>사용기술</h2>
        <Accordian.Group>
          <Accordian title="Flutter">
            초기 iPAD용 어플리케이션 제작을 목표로 했지만 Swift를 사용하지
            못했기 때문에 크로스 웹앱 플랫폼인 Flutter를 선택했습니다. 교육도
            진행해야 했기때문에 학습이 그나마 쉽고 앞으로 많이 사용될 수 있는
            프레임워크라 선택하기도 했습니다. 최종적으로 앱 배포를 App store
            배포말고 웹을 선택했기 때문에 임기응변에 적합했습니다
          </Accordian>
          <Accordian title="Dart">
            Flutter를 사용하기 위한 언어로 선택하였습니다.
          </Accordian>
          <Accordian title="Firebase">
            Google의 개발 생태계를 교육하기 위해 선택하였고 빠른 앱 개발에
            도움이 되어 선택하였습니다.
          </Accordian>
        </Accordian.Group>
      </div>
      <div className="detail-content-section">
        <h2>Demo사진</h2>
        <ImageSlider images={BOOTHIMAGE} isMobile={true} />
      </div>
      <div className="detail-content-section">
        <h2>관련링크</h2>
        <LinkText
          href="https://www.xn--i20bx4f9scba.net/cne/together/details.do?mId=1400&cntNo=391"
          text="행사 홍보 영상"
        />
        <LinkText
          href="https://github.com/Im-younique/AlFestival_Booth"
          text="Github Repository"
        />
      </div>
    </>
  );
}
