// components
import { ImageSlider, LinkText } from "./components";

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
        <h2>성과/리스트</h2>
      </div>
      <div>
        <h2>관련링크</h2>
        <LinkText href="https://www.weekip.co" text="weekip 페이지 바로가기" />
      </div>
      <div>
        <h2>사용기술</h2>
      </div>
      <div>
        <h2>느낀점?</h2>
      </div>
    </>
  );
}
