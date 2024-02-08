"use client";

import { useState, useRef, useEffect } from "react";

import classes from "./gusetBook.module.scss";

import { RiSendPlaneFill } from "@remixicon/react";
import { getAllComments, postComment } from "@/service/guestbook";

export default function GuestBook() {
  const [commentList, setCommentList] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");

  const [enterTime, setEnterTime] = useState<number>(0);

  const inputRef = useRef(null);

  const handleInputChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const currentTime = new Date().getTime();
    if (e.key === "Enter" && currentTime - enterTime > 300) {
      setEnterTime(currentTime);
      handlePostComment();
    }
  };

  const handlePostComment = async () => {
    if (comment.length >= 5 && comment.length <= 100) {
      try {
        await postComment(comment);
        setCommentList((prev) => [...prev, comment]);
        setComment("");
      } catch (e) {
        console.error(e);
      }
    }
  };

  const getComments = async () => {
    const comments = await getAllComments();
    setCommentList(comments);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className={classes.container}>
      <p>사이트 피드백 및 응원의 글 부탁드려요!</p>
      <div className={classes.box}>
        {commentList.map((val, idx) => (
          <div className={classes.bubbleText} key={idx}>
            <span>{val}</span>
          </div>
        ))}
      </div>
      <div className={classes.inputBox}>
        <input
          type="text"
          placeholder="최소 5자 최대 100자, 욕설, 비방 NO!"
          minLength={5}
          maxLength={100}
          ref={inputRef}
          value={comment}
          onChange={handleInputChnage}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className={classes.send}
          disabled={comment.length < 5}
          onClick={handlePostComment}
        >
          <RiSendPlaneFill />
        </button>
      </div>
    </div>
  );
}
