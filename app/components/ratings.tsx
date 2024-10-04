import React from "react";
import Link from "next/link";
import { Star } from "./star";

export interface RatingProps {
  totalRatings: number;
  averageRating: number;
  home: boolean;
}

export default function Rating({
  totalRatings,
  averageRating,
  home,
}: RatingProps) {
  const averageRatingRound: number = Number(averageRating.toFixed(1));

  return (
    <>
      {home ? (
        <Link href="/product-page">
          <section className="flex gap-1 items-center justify-center cursor-pointer lg:justify-start lg:m-4">
            <header className="flex items-center">
              <Star rating={averageRatingRound} />
              <p
                className={`mt-1 ml-2 text-lg font-normal text-slBlack md:text-xl ${home ? "hover:font-bold cursor-pointer" : " cursor-text"}`}
              >
                {totalRatings} Reviews
              </p>
            </header>
          </section>
        </Link>
      ) : (
        <section className="flex gap-1 items-center justify-center cursor-pointer border-b-[1px] m-auto lg:w-full">
          <h2 className="text-slOrangeBright font-bold text-end text-4xl p-4 border-r-[1px] lg:w-1/2 lg:text-6xl lg:font-normal">
            {averageRatingRound}
          </h2>

          <div className="flex flex-col justify-start gap-1 px-4 lg:w-1/2">
            <Star rating={averageRating} />
            <p
              className={`no-underline mt-1 text-lg font-normal ${home ? "hover:font-bold cursor-pointer" : "cursor-text"}`}
            >
              Based on {totalRatings} reviews
            </p>
          </div>
        </section>
      )}
    </>
  );
}
