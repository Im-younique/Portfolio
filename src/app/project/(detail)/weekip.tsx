import Image from "next/image";

// components
import { ImageSlider } from "./components";

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
