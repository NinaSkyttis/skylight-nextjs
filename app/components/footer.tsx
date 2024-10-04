import React from "react";

const content: string[] = [
  "Shop",
  "Refer a friend",
  "Plus",
  "Product Recall",
  "About",
  "Refund Policy",
  "Support",
  "Terms of Service",
  "Blog",
  "Privacy Policy",
  "Press",
  "Affiliates",
  "Careers",
  "Where To Buy",
  "Contact Us",
  "EEmerica",
];

export const Footer = () => {
  return (
    <footer className="bg-slLightOrange mt-12">
      <div className="m-auto w-3/5 md:w-2/5">
        <h2 className="text-5xl text-center p-8 md:p-20">Skylight</h2>
          <nav>
            <ul className="grid grid-flow-row text-lg grid-cols-2 gap-x-6 justify-start">
              {content.map((title: string, index: number) => (
                <li
                  key={index}
                  className="border-b-[1px] border-slBorderColor py-4"
                >
                  {title}
                </li>
              ))}
            </ul>
          </nav>
        <address className=" py-8 text-start not-italic">
          <h3 className="font-poppins text-xl md:text-2xl pt-8 pb-2 tracking-tighter">
            Send us an email at
          </h3>
          <a href="mailto:help@skylight.com" className="m-0 font-semibold tracking-wide">
            help@skylight.com
          </a>
        </address>
      </div>
    </footer>
  );
};
