"use client";
import React, { useState, useEffect } from "react";
import frame from "../../public/images/frame_wood.png";
import frameTwo from "../../public/images/frame_wood_2.png";
import Image, { StaticImageData } from "next/image";

interface ImageData {
  src: StaticImageData;
}

const images: ImageData[] = [
  {
    src: frame,
  },
  {
    src: frameTwo,
  },
];

export const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right",
  );
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const nextSlide = (): void => {
    setSlideDirection("right");
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number): void => {
    setIsClicked(true);
    setCurrentImage(index);

    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    if (!isClicked) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isClicked]);

  return (
    <section className="relative w-full mt-1 mb-6">
      <div
        className={`relative ml-10 group duration-1000 ease-in-out transform 
          ${slideDirection === "right" ? "translate-x-0" : "-translate-x-full"}
          `}
      >
        <Image
          src={images[currentImage].src}
          width={1800}
          height={500}
          alt="wood frame"
          className="rounded-l-3xl transition-all duration-500 ease-in cursor-pointer lg:image-fade"
        />
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 w-10 mx-1 md:w-32 md:mx-5 md:h-[0.3rem] ${
              index === currentImage ? "bg-[#30302f]" : "bg-gray-300"
            } transition-all duration-500 ease-in lg:hidden`}
          ></button>
        ))}
      </div>
    </section>
  );
};
