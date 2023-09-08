import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import required modules
import { Pagination, EffectCoverflow } from "swiper";

import Person from "./Person";

export default function Demo() {
  const [active, setActive] = useState(null);

  return (
    <>
      <section className="grid lg:grid-cols-3 md:grid-cols-2  gap-10">
        <Person
          imgSrc="/t111.jpg"
          name="Fisdom"
          title="Varun Ganjoo"
          subTitle="We partnered with Growth Rocket to create a new social media page about Poker education. They didn't just craft a comprehensive social media strategy for our Poker education page, but also flawlessly executed content from conception to delivery. An exemplary team that genuinely drives results!"
          position="- Founder, Poker Baazi"
        />

        <Person
          imgSrc="/t2.jpg"
          name="Fisdom"
          title="Ramakrishna NK"
          subTitle="Our vision was to share our brand's success stories through short engaging videos. Thanks to the incredibly innovative team at Growth Rocket, not only did we get a tailored social media strategy, but they also spearheaded the entire video creation process. I'm thrilled to share that our debut video skyrocketed with over 60,000 views! Truly an experience beyond our expectations.
        "
          position="- Founder, Rang De
        "
        />

        <Person
          imgSrc="/t3.jpeg"
          name="Shivani Muthanna
        "
          title="Shivani Muthanna"
          subTitle="Teaming up with Ayushman and Growth Rocket was a game changer for us. Their exceptional financial education videos for YouTube and Instagram not only showcased top-tier production but also drove virality, organically boosting our subscribers and followers. An outstanding collaboration!
        "
          position="- Digital Content Head, Fisdom
        "
        />
      </section>
    </>
  );
}
