import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import Heading from "./Heading";
import Link from "next/link";

const Pricing = () => {
  return (
    <section className=" md:pt-6 md:pb-12 py-5 " id="pricing">
      {/* <div className="md:px-40 px-5">
        <Heading title="Select Your Package To Build A Viral Brand" />
      </div> */}
      <h3 className="md:px-40 px-5 pt-10 mb-8 text-3xl md:text-4xl  font-bold">
        Select Your Package To Build A{" "}
        <span className="hero-text">Viral Brand</span>
      </h3>

      <div className="md:mx-40 -mt-5">
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          freeMode={true}
          // loop={true}
          grabCursor={true}
          breakpoints={{
            200: {
              slidesPerView: 1.6,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          // loop={true}
          // centeredSlides= {true}
          modules={[FreeMode]}
          className=" w-full  text-black grid items-center  "
        >
          <SwiperSlide className="  ml-5 md:ml-0   my-5  flex flex-col justify-center items-center ">
            <div className="bg-white px-4 py-4 sm:px-7  border-primary-yellow  border-[6px] rounded-xl w-full  flex flex-col gap-4 ">
              <div className="grid gap-2">
                {/* <h3 className='text-base md:text-lg'>Content Creation</h3> */}
                <div className="flex gap-2 items-center">
                  <h2 className="text-2xl text-[19px] font-extrabold md:text-3xl">
                    Sky Rocket
                  </h2>

                  <div className="w-10 h-10 md:w-12 md:h-12">
                    <lord-icon
                      className=""
                      src="https://cdn.lordicon.com/vfbsedgx.json"
                      trigger="loop"
                      delay="1000"
                      colors="primary:#eee966,secondary:#e83a30"
                      stroke="80"
                    ></lord-icon>
                  </div>
                </div>
                <p className="text-sm text-gray-600  md:text-base">
                  ₹50,000 per month{" "}
                </p>
              </div>
              <div className="flex flex-col gap-2 md:gap-2.5 text-xs sm:text-sm md:text-base">
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">6 Reels</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">1 Influencer</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Carousels</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Personalized Branding</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Video Editing</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Production</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Script Writing</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Content Research</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Content Strategy</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Graphic Designing</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Account Manager</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Dedicated Team</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Meme Marketing</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Daily Stories</p>
                </div>
                {/* <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Rs 5000 per additional reel</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Dedicated SMM & Team</p>
                </div> */}
              </div>

              <Link
                href={
                  "https://calendly.com/ayushman-a5i/growth-rocket-book-a-call"
                }
                target="blank"
              >
                <button className="bgGrad text-black  rounded-xl px-5 py-2  font-extrabold">
                  Book Call{" "}
                  <img className="w-5 inline " src="/assets/right-arrow.svg" />
                </button>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" my-5  flex flex-col justify-center items-center">
            <div className="bg-gray-100 px-4 sm:px-7 py-4 border-primary-yellow  border-[6px] rounded-xl  w-full   flex flex-col gap-4 ">
              <h4 className="bgGrad inline-block w-fit text-white py-1 px-3 text-xs md:text-base md:font-semibold absolute top-2">
                Best For Growing Brands
              </h4>

              <div className="grid gap-2">
                {/* <h3 className='text-base md:text-lg'>New Age Tech Marketing</h3> */}
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl text-[19px] font-extrabold md:text-3xl">
                    Moon Rocket
                  </h2>
                  <div className="w-10 h-10 md:w-12 md:h-12">
                    <lord-icon
                      src="https://cdn.lordicon.com/xhsumrcb.json"
                      trigger="loop"
                      delay="1000"
                      colors="primary:#e83a30,secondary:#eee966"
                      stroke="80"
                    ></lord-icon>
                  </div>
                </div>
                <p className="text-sm text-gray-600  md:text-base">
                  ₹75,000 per month
                </p>
              </div>
              <div className="flex flex-col gap-2 md:gap-2.5 text-xs sm:text-sm md:text-base">
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">12 Reels</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">1 Influencer</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Carousels</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Personalized Branding</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Video Editing</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Production</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Script Writing</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Content Research</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Content Strategy</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Graphic Designing</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Account Manager</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Dedicated Team</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Meme Marketing</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Daily Stories</p>
                </div>
                {/* <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Rs 5000 per additional reel</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Dedicated SMM & Team</p>
                </div> */}
              </div>
              <Link
                href={
                  "https://calendly.com/ayushman-a5i/growth-rocket-book-a-call"
                }
                target="blank"
              >
                <button className="bgGrad rounded-2xl px-5 py-2 text-black font-extrabold">
                  Book Call{" "}
                  <img className="w-5 inline " src="/assets/right-arrow.svg" />
                </button>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="     my-5  flex flex-col justify-center items-center">
            <div className=" border-primary-yellow  border-[6px] bg-white px-4 py-4 sm:px-7  rounded-xl w-full  flex flex-col gap-4 ">
              <h4 className="bgGrad inline-block w-fit text-white py-1 px-3 text-xs md:text-base md:font-semibold absolute top-2">
                Best For Big Brands
              </h4>
              <div className="grid gap-2">
                {/* <h3 className='text-base md:text-lg'>Superhuman Creaors</h3> */}
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl text-[18px] font-extrabold md:text-3xl whitespace-nowrap">
                    Milky Way Rocket
                  </h2>

                  <div className="w-10 h-10 md:w-12 md:h-12">
                    <lord-icon
                      src="https://cdn.lordicon.com/miilpjag.json"
                      trigger="loop"
                      delay="1000"
                      colors="primary:#eee966,secondary:#e83a30"
                      stroke="70"
                    ></lord-icon>
                  </div>
                </div>
                <p className="text-sm text-gray-600  md:text-base">
                  ₹1,25,000 per month
                </p>
              </div>
              <div className="flex flex-col gap-2 md:gap-2.5 text-xs sm:text-sm md:text-base">
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">20 Reels</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">2 Influencers</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">4 Carousels</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Personalized Branding</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Video Editing</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Production</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Script Writing</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Content Research</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Content Strategy</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Graphic Designing</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Account Manager</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Dedicated Team</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Meme Marketing</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/checked--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Daily Stories</p>
                </div>
                {/* <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Rs 5000 per additional reel</p>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/96/null/cancel--v1.png"
                    className="w-6 h-6"
                  />
                  <p className="">Dedicated SMM & Team</p>
                </div> */}
              </div>
              <Link
                href={
                  "https://calendly.com/ayushman-a5i/growth-rocket-book-a-call"
                }
                target="blank"
              >
                <button className="bgGrad  rounded-xl px-5 py-2 text-black font-extrabold">
                  Book Call{" "}
                  <img
                    className="w-5 inline text-black"
                    src="/assets/right-arrow.svg"
                  />
                </button>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-[4vw] md:hidden">
            <div className="w-[4vw] "></div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* for desktop view : slider  */}
      {/* <div className='px-10 gap-x-4   hidden lg:px-24 lg:gap-x-7 xl:px-36  text-black  md:grid grid-cols-3 items-center justify-center  '>


                <div className="my-5">
                    <div className='bgGrad  px-4 py-4 sm:px-7  rounded-xl w-full  flex flex-col gap-6 '>

                        <div className='grid gap-3'>
                            <h3 className='text-lg'>Content Creation</h3>
                            <h2 className='text-3xl font-extrabold'>First</h2>
                            <p className=' text-gray-600  '>Best for Content Creators </p>
                        </div>
                        <div className='flex flex-col gap-4 '>
                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                                <p className=''>Youtube Content Marketing</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                                <p className=''>Instagram Content Marketing</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                                <p className=''>Full Video Creation</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                                <p className=''>Full Video Creation</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                                <p className=''>Full Video Creation</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                                <p className=''>Full Video Creation</p>
                            </div>

                        </div>

                        <button className='bg-primary-pink  rounded-xl px-5 py-2 text-white font-extrabold '>Get Started <img className='w-5 inline text-white' src="/assets/right-arrow.svg" /></button>


                    </div>
                </div>


                <div className="py-6 my-5 ">
                    <div className='bg-gray-100 px-4 sm:px-7 py-4 border-primary-yellow  border-[6px] rounded-xl  w-full   flex flex-col gap-7 '>

                        <div className='grid gap-3'>
                            <h3 className='text-lg'>New Age Tech Marketing</h3>
                            <h2 className='text-3xl font-extrabold'>Second</h2>
                            <p className=' text-gray-600 '>Best for Content Creators </p>
                        </div>
                        <div className='flex flex-col gap-5 '>
                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                                <p className=''>Youtube Content Marketing</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                                <p className=''>Instagram Content Marketing</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                                <p className=''>Full Video Creation</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                                <p className=''>Full Video Creation</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                                <p className=''>Full Video Creation</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                                <p className=''>Full Video Creation</p>
                            </div>

                        </div>


                        <button className='bg-primary-pink rounded-2xl px-5 py-2 text-white font-extrabold '>Get Started <img className='w-5 inline text-white' src="/assets/right-arrow.svg" /></button>



                    </div>
                </div>

                <div className="my-5">
                    <div className='bg-gray-100 px-4 py-4 sm:px-7  rounded-xl w-full  flex flex-col gap-6 '>

                        <div className='grid gap-3'>
                            <h3 className='text-lg'>Master Video Editing</h3>
                            <h2 className='text-3xl font-extrabold'>Third</h2>
                            <p className=' text-gray-600  '>Best for Pros </p>

                        </div>
                        <div className='flex flex-col gap-4 '>
                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                                <p className=''>Youtube Content Marketing</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                                <p className=''>Instagram Content Marketing</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                                <p className=''>Full Video Creation</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                                <p className=''>Full Video Creation</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                                <p className=''>Full Video Creation</p>
                            </div>

                            <div className='flex gap-2'>

                                <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                                <p className=''>Full Video Creation</p>
                            </div>

                        </div>

                        <button className='bg-primary-pink rounded-2xl px-2 py-2 text-white font-extrabold'>Get Started <img className='w-5 inline text-white' src="/assets/right-arrow.svg" /></button>
                    </div>
                </div>
            </div> */}
    </section>
  );
};

export default Pricing;
