"use client";
import React, { useState } from "react";
import { Button } from "./button";

// added quantity button outside of review in order to access the client while keeping the reviews page a server component

export const AddToCart = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col gap-4 sm:justify-center sm:items-center lg:w-72 lg:items-start xl:w-80">
      <h2 className="text-3xl md:text-4xl mx-4">Quantity</h2>
      <div className="flex border rounded w-44 mx-4">
        <button className="p-4" onClick={decreaseQuantity}>
          -
        </button>
        <p className="m-auto">{quantity}</p>
        <button className="p-4" onClick={increaseQuantity}>
          +
        </button>
      </div>
      <div className="-ml-2 pt-4 sm:w-full sm:px-4 lg:-ml-5">
        <Button text={"Add To Cart"} />
      </div>
    </div>
  );
};
