import * as React from "react";
import Heading from "../Heading";
import Faq from "./Faq";
import data from "./data";

export default function Faqs() {
  const questions = data.map((item, index) => {
    return (
      <div key={index}>
        <Faq question={item.question} answer={item.answer} key={index} />
      </div>
    );
  });

  return (
    <section className="max-w-[1180px] mx-auto px-3 pb-20" id="faq">
      <div className="">{/* <Heading title="Solving Your doubts" /> */}</div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-kanit pt-5 pb-10 text-left">
        FAQs
      </h1>
      <div className="md:grid-cols-2 grid gap-5">{questions}</div>
    </section>
  );
}
