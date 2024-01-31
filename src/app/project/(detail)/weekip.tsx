import Image from "next/image";

import { ImageSlider } from "./components";

export default function WeekipDetail() {
  return (
    <>
      <div>
        <h2>Demo사진</h2>
        <ImageSlider>
          <Image
            src="/projectImages/weekip/weekip_main.png"
            alt="위킵메인"
            fill
          />
          <Image
            src="/projectImages/weekip/weekip_content.png"
            alt="위킵콘텐츠"
            fill
          />
          <Image
            src="/projectImages/weekip/weekip_login.png"
            alt="위킵로그인"
            fill
          />
          <Image
            src="/projectImages/weekip/weekip_about.png"
            alt="위킵소개"
            fill
          />
        </ImageSlider>
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
