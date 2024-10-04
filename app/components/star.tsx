import Image from "next/image";
import React from "react";

// This implementation fills the star rating visually. While I recognize that this method is not fully optimized for screen readers, 
// I have included a span with the 'sr-only' class for accessibility.


interface StarFill {
  rating: number;
}

export const Star = ({ rating }: StarFill) => {
  const starFill: number = Number((rating * 19).toFixed(1));

  return (
    <div className="relative w-28 h-7 bg-white">
      <div
        style={{ width: `${starFill}%` }}
        className="initial h-6 bg-yellow-500 z-0"
      ></div>
      <Image
        src={"/images/stars.png"}
        alt="star rating"
        fill
        className="absolute top-0 left-0 z-10 h-7 w-28"
      />
      <span className="sr-only">{`Rating: ${rating} out of 5 stars`}</span>
    </div>
  );
};
