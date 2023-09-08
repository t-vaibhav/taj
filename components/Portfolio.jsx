import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Video from "./Video";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
const Portfolio = () => {
  return (
    <section
      className="max-w-[1180px] mx-auto py-10 space-y-16 sm:px-5 px-1"
      id="portfolio"
    >
      <div id="ig">
        <div className="px-5 md:px-1 mb-6 md:mb-12">
          <div className="md:py-2 py-7 space-y-2">
            <h1 className=" text-3xl md:text-5xl font-bold font-kanit">
            We create the highest quality content for brands.{" "}
              <span className="hero-text ">
                And we will do the same for you.
              </span>
            </h1>
          </div>
        </div>
        {/* 
        <div className="grid md:grid-cols-3 gap-14 md:gap-7  px-10 ">
          <div className="border border-orange-500 shadow-md shadow-orange-600 p-1 tilt2">
            <Video url="/Portfolio/4.mp4" />
          </div>
          <div className="border border-orange-500 shadow-md shadow-orange-600 p-1 tilt2">
            <Video url="/Portfolio/1.mp4" />
          </div>
          <div className="border border-orange-500 shadow-md shadow-orange-600 p-1 tilt2">
            <Video url="/Portfolio/3.mp4" />
          </div>
        </div> */}
        <div className=" p-2  h-full w-full  rounded-md ">
          <Swiper
            spaceBetween={30}
            slidesPerView={"auto"}
            // freeMode={true}
            loop={true}
            grabCursor={true}
            breakpoints={{
              200: {
                slidesPerView: 1.4,
              },
              768: {
                slidesPerView: 3.5,
              },
            }}
            // loop={true}
            centeredSlides={true}
            modules={[FreeMode]}
            className="mySwiper flex h-full w-full  rounded-md"
          >
            <SwiperSlide className="border border-orange-500 shadow-md shadow-orange-600 p-1 rounded-md">
              {" "}
              <Video url="/Portfolio/1.mp4" />
            </SwiperSlide>
            <SwiperSlide className="border border-orange-500 shadow-md shadow-orange-600 p-1 rounded-md">
              {" "}
              <Video url="/Portfolio/2.mp4" />
            </SwiperSlide>
            <SwiperSlide className="border border-orange-500 shadow-md shadow-orange-600 p-1 rounded-md">
              {" "}
              <Video url="/Portfolio/3.mp4" />
            </SwiperSlide>
            <SwiperSlide className="border border-orange-500 shadow-md shadow-orange-600 p-1 rounded-md">
              {" "}
              <Video url="/Portfolio/4.mp4" />
            </SwiperSlide>
            <SwiperSlide className="border border-orange-500 shadow-md shadow-orange-600 p-1 rounded-md">
              {" "}
              <Video url="/Portfolio/5.mp4" />
            </SwiperSlide>
            <SwiperSlide className="border border-orange-500 shadow-md shadow-orange-600 p-1 rounded-md">
              {" "}
              <Video url="/Portfolio/6.mp4" />
            </SwiperSlide>
          </Swiper>
          {/* <div className=" h-full w-full tilt2 border border-orange-500 shadow-md shadow-orange-600 flex items-center relative p-1">
            <Video url="/videos/reel.mp4" />
          </div>
          <div className=" h-full w-full tilt2 border border-orange-500 shadow-md shadow-orange-600 flex items-center relative p-1">
            <Video url="/videos/reel.mp4" />
          </div>
          <div className=" h-full w-full tilt2 border border-orange-500 shadow-md shadow-orange-600 flex items-center relative p-1">
            <Video url="/videos/reel.mp4" />
          </div> */}
        </div>

        {/* <div className="flex justify-center py-10">
        <a
          href="https://drive.google.com/drive/u/0/folders/1MZGIua8vKzFxgvJl7qbWTwlB-rgI8fDG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cta-btn text-sm px-4 sm:text-lg md:text-xl  py-2  text-gray-900 sm:px-5 rounded-sm  font-semibold">
            See More
          </button>
        </a>
      </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
