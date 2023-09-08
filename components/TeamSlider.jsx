import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCreative } from "swiper";

import Image from 'next/image';
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { teamData } from "../utility/data";





// import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';




const renderTeamSlides = teamData.map((data, index) => (
    <SwiperSlide key={index} className="bg-gray-100 p-5 items-center md:p-20 grid grid-cols-1   md:grid-cols-5 justify-center gap-x-14 gap-y-4">
        <div className='flex flex-col md:col-span-2  items-center md:items-start'>
      <Image
            src={`/assets/${data.image}.png`}
            width={400}
            height={400}
            alt={"team-member-image"}
            className="rounded-t-lg w-[65%] md:w-full  object-contain  "
          /> 
          </div>
      <div className='flex flex-col pb-5 md:pb-0 md:gap-5 gap-3 md:col-span-3 items-center md:items-start'>
        <h2 className='md:text-4xl text-3xl font-medium'>{data.name}</h2>
        <h4 className='px-3 py-1 bg-primary-yellow text-lg md:text-xl font-medium italic w-fit'>{data.designation}</h4>
        <p className='md:text-lg  md:py-5 py-3 text-justify'>{data.text}</p>
      </div> 
    </SwiperSlide>
  ));






export const TeamSlider = () => {
  return (
    <>    
    <Swiper
    style={{
        "--swiper-pagination-color": "#FF5D73",
        
      }}
      spaceBetween={50}
      slidesPerView={1}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}

      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      pagination={{
        clickable: true,
        // dynamicBullets: true,
      }}
    //   scrollbar={{ draggable: true }}
    modules={[Pagination, EffectCreative, Autoplay]}

    className='md:w-[85%] w-[90%] text-black '
    >
        {renderTeamSlides}




      


    
    </Swiper>
    {/* <div className="swiper-pagination absolute cursor-pointer text-orange-300 bg-yellow-200 z-50 text-center left-1/2 bottom-28"></div>  */}
    </>

  )
}
