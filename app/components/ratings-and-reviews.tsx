import React from "react";
import Link from "next/link";
import { Star } from "./star";
import { Review } from "./review";

export interface RatingProps {
  home: boolean;
}

export interface Reviews {
  id: number;
  name: string;
  title: string;
  description: string;
  rating: number;
  date: string;
}

// conditionally rendering this component depending on if RatingsAndReviews are displayed on the home page or the product page. Initially I had this logic inside of the ProductPage, but decided to change it to this component in order to avoid global state management or duplicate code and fetch requests

export default async function RatingsAndReviews({
  home,
}: RatingProps) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews`);
  
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  
  const reviews = await res.json();
  
  // collecting the total ratings number divide by length to get average value
  const totalReviews = reviews.reduce(
    (sum: number, review: Reviews) => sum + review.rating,
    0,
  );
  
  // calculating the average rating
  const totalRatings = reviews.length.toFixed(0);
  const averageRating = totalReviews / reviews.length;
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
        <>
        <section className="flex gap-1 items-center justify-center cursor-pointer border-b-[1px] m-auto lg:w-full">
          <h2 className="text-slOrangeBright font-bold text-end text-4xl p-4 border-r-[1px] lg:text-6xl lg:font-normal">
            {averageRatingRound}
          </h2>
          <div className="flex flex-col pl-4">
              <Star rating={averageRating} />
              <p
                className={`no-underline mt-1 text-lg font-normal ${home ? "hover:font-bold cursor-pointer" : "cursor-text"}`}
              >
                Based on {totalRatings} reviews
              </p>
              </div>
          </section>
          
          <section>
          <div>
            {reviews.length > 0 ? (
              reviews.map((review: Reviews) => (
                <article key={review.id} className="m-auto">
                  <Review
                    key={review.id}
                    name={review.name}
                    rating={review.rating}
                    title={review.title}
                    description={review.description}
                    date={review.date}
                  />
                  <hr className="my-4" />
                </article>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
            </div>
        </section>
        </>
      )}
    </>
  );
}
