import Image from "next/image";

// styles
import classes from "./personal.module.scss";

// icon
import {
  RiUser2Fill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "@remixicon/react";

export default function Personal() {
  return (
    <div className="content-container">
      <div className={classes.personal_subtitle}>
        <RiUser2Fill />
        <h6>Personal Info</h6>
      </div>
      <p className={classes.personal_discription}>
        안녕하세요. 편리한 사용경험과 차별화된 서비스로 세상을 윤택하게
        만들어가는 프론트엔드 개발자입니다.
      </p>
      <div className={classes.information_box}>
        <Image
          src={"/myImages/id_photo.jpg"}
          alt="id_photo"
          width={117}
          height={156}
          className={classes.id_photo}
        />
        <ul>
          <li>
            <span>이름: </span>
            <span>임동윤</span>
          </li>
          <li>
            <span>생년월일: </span>
            <span>1999/09/02</span>
          </li>
          <li>
            <span>핸드폰: </span>
            <span>010-5863-4725</span>
          </li>
          <li>
            <span>이메일: </span>
            <span>dyyim4725@gmail.com</span>
          </li>
          <li>
            <span>주소: </span>
            <span>Cheonan, South Korea (천안)</span>
          </li>
        </ul>
      </div>
      <div className={classes.link_wrapper}>
        <RiGithubFill size={35} />
        <RiLinkedinBoxFill size={35} color="#0A66C2" />
        <RiInstagramFill size={35} color="#E4405F" />
      </div>
    </div>
  );
}
