"use client";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
}

// Not sure this is the best way to adjust the endpoint in the Link component,
// but felt like a simple way to navigate

export const Button = ({ text }: ButtonProps) => {
  return (
    <>
      <Link href={`${text === "buy now" ? "/product-page" : "/cart"}`}>
        <button className="bg-slOrange hover:bg-slOrangeBright w-full cursor-pointer sm:text-lg mobile:text-sm tablet:text-sm py-4 px-4 rounded-full text-white font-bold md:text-2xl">
          {text}
        </button>
      </Link>
    </>
  );
};
