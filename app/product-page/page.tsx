import React from "react";
import Image from "next/image";
import RatingAndReviews from "../components/ratings-and-reviews";
import { AddToCart } from "../components/add-to-cart";

export default async function ProductPage() {
  return (
    <div className="flex flex-col">
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
              <RatingAndReviews
                home={false}
              />
            </div>
        </section>
    </div>
  );
}
