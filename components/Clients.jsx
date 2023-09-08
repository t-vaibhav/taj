import React, { useRef, useState } from "react";
import Image from "next/image";
import Heading from "./Heading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import { TurnLeft } from "@mui/icons-material";

export default function Bodynav() {
  return (
    <section className="max-w-[1180px] mx-auto px-5 text-white bg-black py-16">
      <h1 className=" text-3xl md:text-5xl font-bold font-kanit py-10">
        Brands That <span className="hero-text ">Trust Us</span>
      </h1>
      <div className="  border border-orange-500 -rotate-2  rounded-[8px] mx-3 mt-5">
        <div className="py-10 px-0 md:px-10 overflow-visible md:flex flex-row md:space-y-0 justify-between no-tilt items-center">
          {/* swiper for size > md starts */}
          <Swiper
            slidesPerView={"auto"}
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            height={"auto"}
            // centeredSlides={true}
            spaceBetween={30}
            modules={[Autoplay, Navigation]}
            className="mySwiper "
          >
            <SwiperSlide className=" swipeslide">
              <div className="relative flex justify-center lg:p-2 md:p-10 p-16 ">
                <Image
                  src={"/brands/spur.png"}
                  height={55}
                  width={220}
                  alt={"spur"}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10 p-16">
              <Image
                src={"/brands/navi.png"}
                height={55}
                width={220}
                alt={"navi"}
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10 p-16">
              <Image
                src={"/brands/aism.png"}
                height={55}
                width={101}
                alt={"aism"}
                className="object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10 p-16">
              <Image
                src={"/brands/rangde.png"}
                height={55}
                width={220}
                alt={"rangde"}
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10 p-16">
              <Image
                src={"/brands/shishu.jpg"}
                height={55}
                width={220}
                alt={"shishu"}
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10 p-16">
              <Image
                src={"/brands/fisdom.svg"}
                height={55}
                width={220}
                alt={"fisdom"}
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10 p-16">
              <Image
                src={"/brands/zypp.png"}
                height={55}
                width={220}
                alt={"zypp"}
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0  md:p-10p-16">
              <Image
                src={"/brands/pokerbazi.png"}
                height={70}
                width={250}
                alt={"pokerbazi"}
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0  md:p-10p-16">
              <Image
                src={"/brands/opulence.jpeg"}
                height={55}
                width={160}
                alt={"opulence"}
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10p-16">
              <Image
                src={"/brands/avisa.jpg"}
                height={55}
                width={160}
                alt={"avisa"}
              />
            </SwiperSlide>
          </Swiper>
          {/* swiper for size > md ends */}

          {/* swiper for size < md starts */}
          {/* <Swiper
            slidesPerView={"auto"}
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            height={"auto"}
            // centeredSlides={true}
            spaceBetween={30}
            modules={[Autoplay, Navigation]}
            className="mySwiper block md:hidden"
          >
            <SwiperSlide className=" swipeslide">
              <div className="relative flex justify-center lg:p-2 md:p-10 p-16 ">
                <Image
                  src={"/brands/spur.png"}
                  height={55}
                  width={220}
                  alt={"spur"}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10 p-16">
              <Image
                src={"/brands/navi.png"}
                height={55}
                width={220}
                alt={"navi"}
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10 p-16">
              <Image
                src={"/brands/aism.png"}
                height={55}
                width={101}
                alt={"aism"}
                className="object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10 p-16">
              <Image
                src={"/brands/rangde.png"}
                height={55}
                width={220}
                alt={"rangde"}
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10 p-16">
              <Image
                src={"/brands/shishu.jpg"}
                height={55}
                width={220}
                alt={"shishu"}
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            slidesPerView={"auto"}
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            height={"auto"}
            // centeredSlides={true}
            spaceBetween={30}
            modules={[Autoplay, Navigation]}
            className="mySwiper block md:hidden"
          >
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10 p-16">
              <Image
                src={"/brands/fisdom.svg"}
                height={55}
                width={220}
                alt={"fisdom"}
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10 p-16">
              <Image
                src={"/brands/zypp.png"}
                height={55}
                width={220}
                alt={"zypp"}
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0  md:p-10p-16">
              <Image
                src={"/brands/pokerbazi.png"}
                height={70}
                width={250}
                alt={"pokerbazi"}
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0  md:p-10p-16">
              <Image
                src={"/brands/opulence.jpeg"}
                height={55}
                width={160}
                alt={"opulence"}
              />
            </SwiperSlide>
            <SwiperSlide className="swipeslide flex justify-center lg:p-0 md:p-10p-16">
              <Image
                src={"/brands/avisa.jpg"}
                height={55}
                width={160}
                alt={"avisa"}
              />
            </SwiperSlide>
          </Swiper> */}
          {/* swiper for size < md ends */}
        </div>
      </div>
      {/* <div className="flex justify-center py-10">
        <a
          href="https://drive.google.com/drive/u/0/folders/1MZGIua8vKzFxgvJl7qbWTwlB-rgI8fDG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#FF351F] text-sm px-4 sm:text-lg md:text-xl  py-2  text-gray-900 sm:px-5 rounded-sm  font-semibold">
            See More
          </button>
        </a>
      </div> */}
    </section>
  );
}
