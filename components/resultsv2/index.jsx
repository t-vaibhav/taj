import Image from "next/image";
import React from "react";
import Heading from "../Heading";
import ResultCard from "./ResultCard";
//heelo
export default function Results2() {
  return (
    <section id="results" className="max-w-[1180px] lg:mx-auto  text-white bg-black py-10 lg:py-16 px-3 md:px-5">
      <h1 className=" text-3xl md:text-5xl font-bold font-kanit mb-3 md:my-10">
        Stories of our brands that saw{" "}
        <span className="hero-text "> exponential growth</span>
      </h1>
      <div className="grid lg:grid-cols-1 grid-cols-1 grid-rows-1 gap-5 items-end  lg:gap-10">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-8 col-span-12">
            <ResultCard
              imgSrc="/brands/fisdom.svg"
              name="Fisdom"
              title="1100% Increase in views within 45 days"
              subTitle="Fisdom's Instagram reels used to get an average of 300-400
        organic views. After partnering with us, their average views on
        reels skyrocketed to 3500 in less than 45 days."
            />
          </div>{" "}
          <div className="lg:col-span-4"></div>
        </div>
        <div className="grid grid-cols-12">
          <div className="lg:col-span-4"></div>
          <div className="lg:col-span-8 col-span-12">
            <ResultCard
              imgSrc="/result_formula.JPG"
              name="Formula Guy"
              title="50,000 followers and 5 million lifetime views in 6 months"
              subTitle="Formula Guy’s personal brand page gained over 50,000 followers and over 5 million views in less than 6 months. Growth Rocket helped build his personal brand from day 1 of his journey.
            "
            />
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="lg:col-span-8 col-span-12">
            <ResultCard
              imgSrc="/rangde.svg"
              name="Rang De"
              title="800% more virality and 6x growth in average views"
              subTitle="RangDe created a reel in house on one of their success stories and it got 6800 views. We created a reel on the exact same topic and it went viral with over 61,000 views! Plus a 6x growth in average views on reels."
            />
          </div>
          <div className="lg:col-span-4"></div>
        </div>
      </div>
    </section>
  );
}
