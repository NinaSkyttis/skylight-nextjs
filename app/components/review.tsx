import React from "react";
import { Star } from "./star";
import Image from "next/image";

export interface ReviewProps {
  name: string;
  rating: number;
  title: string;
  description: string;
  date: string;
}
export const Review = (props: ReviewProps) => {
  const findInitials = props.name.split(" ");
  let firstAndLastInit = "";
  let initials = "";
  if (props.name.length > 6) {
    firstAndLastInit += `${findInitials[0]} `;
    firstAndLastInit += `${findInitials[1][0]}`;
  }
  for (let i = 0; i < findInitials.length; i++) {
    initials += `${findInitials[i][0].toUpperCase()}`;
  }

  const reviewDate = new Date(props.date);

  const formattedDate = reviewDate.toLocaleDateString();

  return (
    <article className="grid grid-cols-5 justify-between py-4 font-poppins">
      <header className="flex gap-2 col-span-2 place-content-start">
        <div className="relative flex w-10 h-10 bg-slate-300 rounded-full justify-center items-center text-slate-400 font-bold text-lg lg:text-2xl">
          {initials}
          <Image
            src="/images/icon_checkmark.png"
            width={12}
            height={12}
            alt="checkmark"
            className="absolute bottom-0 right-0"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-md font-poppins lg:text-xl">
            {props.name.length > 6 ? `${firstAndLastInit}.` : props.name}
          </h4>
          <p className="text-xs text-slOrangeBright lg:text-sm">
            Verified Buyer
          </p>
        </div>
      </header>

      <div className="col-span-2">
        <div className="">
          <Star rating={props.rating} />
          <h3 className="mb-2 font-poppins font-extrabold text-lg md:text-lg lg:text-xl">
            {props.title}
          </h3>
          <p className="my-4 text-md lg:text-lg">{props.description}</p>
        </div>
      </div>
      <time
        dateTime={props.date}
        className="col-start-5 place-content-end text-md "
      >
        {formattedDate}
      </time>
    </article>
  );
};
