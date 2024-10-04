import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./button";

export const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 sticky z-20 bg-slWhite top-0 w-100 gap-4 items-center p-4 md:my-6 md:px-12">
      <Link href="/">
        <Image
          src={"/images/skylight-icon.webp"}
          width={22}
          height={22}
          alt="skylight logo"
          className="block md:hidden"
          priority
        />
        <Image
          src={"/images/skylight-logo-full.webp"}
          width={200}
          height={50}
          alt="skylight logo"
          className="hidden md:block md:w-44"
        />
      </Link>

      <ul className="flex justify-end gap-3 items-center w-100 col-span-2 md:text-xl">
        <li className="hidden md:block">
          <Link href="/" className="no-underline font-normal ">
            About
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href="/" className="no-underline font-normal ">
            Products
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href="/" className="no-underline font-normal ">
            Support
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href="/" className="no-underline font-normal ">
            Login
          </Link>
        </li>

        <li className="md:hidden">
          <Button text={"Buy Now"} />
        </li>

        <li>
          <Image
            src={"/images/cart-icon.webp"}
            alt="cart-icon"
            width={25}
            height={25}
          />
        </li>
        
        <li>
          <Image
            src={"/images/burger-icon.webp"}
            alt="cart-icon"
            width={25}
            height={25}
            className="md:hidden"
          />
        </li>

        <li className="hidden md:block">
          <Button text={"Buy Now"} />
        </li>
      </ul>
    </nav>
  );
};
