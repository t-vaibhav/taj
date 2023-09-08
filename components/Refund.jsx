import React from "react";
import Heading from "./Heading";

export default function Refund() {
  return (
    <section className="max-w-[1180px] mx-auto px-3  text-white bg-black py-16">
      {/* <Heading title="Number that speak louder than words" /> */}

      <div className=" border border-orange-500 -rotate-2 mt-8 w-full rounded-[8px] mx-3 mx-auto">
        <div className="py-10 lg:px-10 lg:flex flex-row space-y-10 lg:space-y-0 justify-between w-full no-tilt   items-center">
          <h1 className="md:text-5xl sm:text-3xl text-2xl w-full text-black font-extrabold font-kanit capitalize text-center popping-text ">
            Full Refund If We Don&apos;t Beat Your Current Views
          </h1>
        </div>
      </div>
    </section>
  );
}
