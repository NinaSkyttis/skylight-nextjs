import React from "react";

export const Banner = () => {
  return (
    <section className="flex bg-slLavender items-center justify-center text-center" >
      <p className="sm:text-sm md:text-xl py-6 px-3 tracking-wide mx-8">
        Juggling It All?{" "}
        <a
          className="!underline font-bold"
          href="https://www.skylightframe.com/mental-load-report/"
        >
        Read Our New Report
        </a>
        {" "} on Just How Many Hours Parents Spend on the Mental Load
      </p>
    </section>
  );
};
