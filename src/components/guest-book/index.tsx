"use client";

import classes from "./gusetBook.module.scss";

import { RiSendPlaneFill } from "@remixicon/react";

const dummy = [
  "와~ 잘 보고 갑니다",
  "옹니라ㅜㅇ니ㅏ룬ㅇ미ㅏ루ㅏㅣㅁㄴ우리ㅏㅁㅇ뉘라ㅜㅇㄴ미ㅏ룸니알asdfjbnsdkjfbksadjbfkjsdabfksadfjb",
  "난 GAEKO 믿음직한 오 승환 글러브",
  "한국은 아시안컵 4강에서 떨어졌습니다.",
  "스모큐 업 스모큐",
  "와~ 잘 보고 갑니다",
  "옹니라ㅜㅇ니ㅏ룬ㅇ미ㅏ루ㅏㅣㅁㄴ우리ㅏㅁㅇ뉘라ㅜㅇㄴ미ㅏ룸니알asdfjbnsdkjfbksadjbfkjsdabfksadfjb",
  "난 GAEKO 믿음직한 오 승환 글러브",
  "한국은 아시안컵 4강에서 떨어졌습니다.",
  "스모큐 업 스모큐",
];

export default function GuestBook() {
  return (
    <div className={classes.container}>
      <p>사이트 피드백 및 응원의 글 부탁드려요!</p>
      <div className={classes.box}>
        {dummy.map((val, idx) => (
          <div className={classes.bubbleText} key={idx}>
            <span>{val}</span>
          </div>
        ))}
      </div>
      <div className={classes.inputBox}>
        <input type="text" placeholder="최소 5자 최대 100자, 욕설, 비방 NO!" />
        <RiSendPlaneFill className={classes.send} />
      </div>
    </div>
  );
}
