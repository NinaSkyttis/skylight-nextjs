import React from "react";
import Image from "next/image";
import { Review } from "../components/review";
import Ratings from "../components/ratings";
import { AddToCart } from "../components/add-to-cart";

export interface Reviews {
  id: number;
  name: string;
  title: string;
  description: string;
  rating: number;
  date: string;
}

interface ReviewsPageProps {
  home: boolean;
}

export default async function ReviewsPage({home}: ReviewsPageProps) {
  // Fetching reviews from database (MySQL)
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

  return (
    <div className="flex flex-col">
      {home ? (
        <Ratings
          home={true}
          averageRating={averageRating}
          totalRatings={totalRatings}
        />
      ) : (
        <>
          <section className="flex flex-col lg:flex-row items-center lg:gap-8">
            <div className="relative w-full mt-4 -ml-12 lg:w-1/2">
              <Image
                alt="Skylight digital wood frame"
                src={"/images/frame_wood.png"}
                width={1000}
                height={250}
                objectFit="cover"
                className="rounded-r-3xl"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl sm:py-8">The Skylight Wood Frame</h1>
              <AddToCart />
            </div>
          </section>

          <section className="m-auto w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 py-8">
            <header>
              <h2 className="py-8 text-center text-5xl text-slDarkOrange">
                Customer Reviews
              </h2>
            </header>
            <div className="w-full">
              <Ratings
                home={false}
                averageRating={averageRating}
                totalRatings={totalRatings}
              />
            </div>

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
          </section>
        </>
      )}
    </div>
  );
}
