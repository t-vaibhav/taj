import React from "react";
import Heading from "../Heading";
import Demo from "./Demo";

export default function Testinomials() {
  return (
    <section className=" text-white bg-black pt-10 max-w-[1180px] mx-5 md:mx-auto">
      <h1 className=" text-3xl md:text-5xl font-bold font-kanit mb-3 md:my-10 px-3 lg:px-0">
        Hear from our <span className="hero-text "> Happy Clients</span>
      </h1>
      <div className="py-5">
        <Demo />
      </div>
    </section>
  );
}
