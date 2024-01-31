"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import classes from "./imageSlider.module.scss";

import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

interface IProp {
  images: { src: string; alt: string }[];
}

export default function ImageSlider({ images }: IProp) {
  const [imgIndex, setImgIndex] = useState<number>(1);

  const imgContainerRef = useRef<HTMLDivElement>(null);

  const moveNextSlide = () => {
    if (imgContainerRef.current !== null) {
      imgContainerRef.current.style.transform = `translateX(-${
        imgIndex + 1
      }00%)`;
      imgContainerRef.current.style.transition = "0.4s all ease-in-out";
      setImgIndex(imgIndex + 1);
    }
  };

  const movePrevSlide = () => {
    if (imgContainerRef.current !== null) {
      imgContainerRef.current.style.transform = `translateX(-${
        imgIndex - 1
      }00%)`;
      imgContainerRef.current.style.transition = "0.4s all ease-in-out";
      setImgIndex(imgIndex - 1);
    }
  };

  const moveSlide = (index: number) => {
    if (imgContainerRef.current !== null) {
      imgContainerRef.current.style.transform = `translateX(-${index + 1}00%)`;
      imgContainerRef.current.style.transition = "0.4s all ease-in-out";
      setImgIndex(index + 1);
    }
  };

  useEffect(() => {
    if (imgIndex === 0) {
      setImgIndex(images.length);
      setTimeout(() => {
        if (imgContainerRef.current != null) {
          imgContainerRef.current.style.transform = `translateX(-${images.length}00%)`;
          imgContainerRef.current.style.transition = "0s";
        }
      }, 500);
    }

    if (imgIndex > images.length) {
      setImgIndex(1);
      setTimeout(() => {
        if (imgContainerRef.current != null) {
          imgContainerRef.current.style.transform = `translateX(-100%)`;
          imgContainerRef.current.style.transition = "0s";
        }
      }, 500);
    }
  }, [imgIndex, images]);

  return (
    <div className={classes.container}>
      <div className={classes.imgBox}>
        <div className={classes.imgContainer} ref={imgContainerRef}>
          <Image
            src={images[images.length - 1].src}
            alt={images[images.length - 1].alt}
            fill
          />
          {images.map(({ src, alt }, idx) => (
            <Image src={src} alt={alt} fill key={idx + 1} />
          ))}
          <Image src={images[0].src} alt={images[0].alt} fill />
        </div>
        <button
          className={`${classes.arrowBtn} ${classes.leftBtn}`}
          onClick={movePrevSlide}
        >
          <RiArrowLeftSLine />
        </button>
        <button
          className={`${classes.arrowBtn} ${classes.rightBtn}`}
          onClick={moveNextSlide}
        >
          <RiArrowRightSLine />
        </button>
      </div>
      <div className={classes.imgSelectorWrapper}>
        {images.map(({ src, alt }, idx) => (
          <div
            key={`${src}${idx}`}
            className={classes.imgSelectorBox}
            onClick={() => moveSlide(idx)}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className={`${imgIndex === idx + 1 && classes.selected}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
