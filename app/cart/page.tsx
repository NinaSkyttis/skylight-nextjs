"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";

// imported canvas confetti for fun.
// **Disclaimer: 
// Copied the code from Github and got some adjustments from ChatGPT

const fireworkEffect = () => {
  const duration = 15 * 300;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    shapes: ["star"],
  };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.9, 0.1), y: Math.random() - 0.4 },
      colors: ["#b2e3ab", "#f66955", "#fdc36d"],
      shapes: ["star"],
    });
  }, 250);
};

export default function Cart() {
  useEffect(() => {
    fireworkEffect();
  }, []);

  return (
    <section className="m-auto p-20 min-h-fit xl:h-96">
      <h1 className="font-poppins text-2xl md:text-4xl p-4 text-slBlack">
        {`Unfortunately you can't buy the wooden frame at this time =(`}
      </h1>
      <h1 className="font-poppins text-4xl md:text-7xl p-4">
        {`But there is nothing stopping you from hiring `}
        <span className="nins font-bold">Nins</span>
      </h1>

      <article className="flex flex-col p-4 lg:p-12">
        <div className="max-w-xs bg-slOrange text-white p-4 rounded-lg relative">
          <div className="absolute -bottom-6 right-16 w-0 h-0 border-t-[24px] border-t-slOrange border-r-[24px] border-r-transparent"></div>
          <p>
            Hire my mamma so she can finally buy me a frame to go with this
            look!
          </p>
        </div>

        <Image
          alt="otis begging for his mom"
          src={"/images/otis.png"}
          width={300}
          height={400}
        />
      </article>
    </section>
  );
}
