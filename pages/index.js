import Head from "next/head";
import Image from "next/image";
import { TeamSlider } from "../components/TeamSlider";
import MainContent from "../components/MainContent";
import Link from "next/link";
import { stats, LookingFor, mainContent, ourServices } from "../utility/data";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import { EffectCreative, EffectFlip, EffectCube, EffectFade } from "swiper";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";

import logo from "../public/logo.png";
import img1 from "../public/assets/Hero/Ellipse 1.png";
import img2 from "../public/assets/Hero/Ellipse 2.png";
import img3 from "../public/assets/Hero/Ellipse 3.png";

// imports from vaibhav starts
import Clients from "../components/Clients";
import Stats from "../components/Stats";
import Whatwedo from "../components/Whatwedo";

import Marketing from "../components/Marketing";
import Connect from "../components/Connect";
import { TypeAnimation } from "react-type-animation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Growon from "../components/Growon";
import Founder from "../components/Founder";
import Footer from "../components/Footer";
import Test from "../components/Test";
import Herotext from "../components/Herotext";
import Refund from "../components/Refund";
import Faqs from "../components/faqs/index.js";
// import Results from "../components/Results_tr";
import Results2 from "../components/resultsv2/index.jsx";
import Testinomials from "../components/testinomials";
// import Demo from "../components/testinomials/Demo";
// import Video from "../components/Video";
import Pricing from "../components/Pricing";
import Portfolio from "../components/Portfolio";

const renderStats = stats.map((stat, index) => {
  return (
    <div
      key={index}
      className={`items-center ${stat.class} flex flex-col  h-[54]  justify-end`}
    >
      <Image
        src={`/assets/${stat.img}.png`}
        alt=""
        width={300}
        height={300}
        priority
        className="h-36 md:h-52 w-auto object-cover "
      />
      <div className="font-extrabold text-xl pt-2">{stat.num}</div>
      <div>{stat.text}</div>
    </div>
  );
});

const renderMainContent = mainContent.map((content, index) => {
  return (
    <div
      key={index}
      id={content.id}
      className={`items-center p-2 mb-9 h-[54] lg:w-[90%] lg:mx-auto `}
    >
      {/* <h1 className='font-bold text-center md:text-left mb-2 text-2xl'>{content.header}</h1> */}
      <h3 className="mx-auto md:text-left md:px-16 text-center pt-10 text-3xl mb-10 md:text-4xl font-bold">
        {content.header}
      </h3>

      <div className={`md:flex  ${content.class} items-center mt-4 sm:px-16 `}>
        <div className="lg:w-1/5 md:w-1/3 mb-4 md:mr-4 px-4 flex items-center justify-center m-auto">
          <Image
            src={`/assets/MainContent/${content.coverImg}.png`}
            alt=""
            width={600}
            height={600}
            className="mb-4 mx-auto rounded-full w-48 md:w-full my-auto"
          />
        </div>

        <div className="text-center font-extralight px-2  md:text-left tracking-wide md:w-4/5  mx-auto md:text-lg lg:text-xl">
          <div className="mb-4">{content.textLine1} </div>
          <div className="mb-4">{content.textLine1} </div>
        </div>
      </div>
    </div>
  );
});

const renderOurServices = ourServices.map((service, index) => {
  return (
    <div key={index} className="service">
      <div className="mb-3 ">
        <Image
          src={`/assets/OurServices/${service.img}.png`}
          width={300}
          height={300}
          alt=""
          className=" h-32 w-auto"
        />
      </div>
      <div>
        {service.textLine1} <br /> {service.textLine2}
      </div>
    </div>
  );
});

export default function Home() {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className=" mt-2 flex flex-col gap-2 pt-3 mb-3  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-xl  text-left "
      >
        <Link href="#portfolio" className="flex items-center ">
          Portfolio
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-xl text-left"
      >
        <Link href="#results" className="flex items-center">
          Results
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-xl  text-left "
      >
        <Link href="#pricing" className="flex items-center">
          Pricing
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-xl text-left"
      >
        <Link href="#services" className="flex items-center">
          Services
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-xl text-left"
      >
        <Link href="#contact" className="flex items-center">
          Contact
        </Link>
      </Typography>
    </ul>
  );
  return (
    <>
      <Head>
        <title>Growth Rocket</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* seo tags */}

        {/* Title */}

        {/* Meta description */}
        <meta
          name="description"
          content="We specialize in creating engaging social media content for various brands, helping them connect with their audience and drive growth."
        />

        {/* Meta keywords */}
        <meta
          name="keywords"
          content="social media content, brand marketing, content creation, social media strategy"
        />

        {/* Author */}
        <meta name="author" content="Growth Rocket" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Growth Rocket" />
        <meta
          property="og:description"
          content="We specialize in creating engaging social media content for various brands, helping them connect with their audience and drive growth."
        />
        <meta property="og:image" content="https://imgur.com/a/BoRmuLh" />
        <meta property="og:url" content="https://growthrocket.media" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Growth Rocket: Let us help you to Grow Your Brand"
        />

        {/* seo tags */}

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-x-hidden bg-black text-white ">
        <Navbar className="mx-auto max-w-screen-xl pb-3 pt-6 px-4 lg:px-8 lg:py-4  bg-transparent navbar">
          <div className="container mx-auto flex items-center justify-between  text-blue-gray-900">
            <Image
              src={logo}
              alt={"team-member-image"}
              className=" w-10 h-10 mt-3 ml-4"
              priority
            />
            <div className="hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className=" h-10 w-10 grid   items-center text-xl scale-[180%]  lg:hidden hover:bg-transparent active:bg-transparent focus:bg-transparent"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 relative right-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 relative right-6 "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <MobileNav open={openNav}>{navList}</MobileNav>
        </Navbar>

        {/* hero section  */}
        <section className="bg-black min-h-[550px] mb-10 md:pb-16 ">
          <div className="flex p-4 z-50 lg:max-w-screen-xl px-5 justify-between md:p-12 md:pt-0 lg:p-16 items-center  mx-auto relative ">
            <div className="font-molengo py-5 md:py-28 lg:py-20 sm:pb-0">
              <div>
                <Herotext />

                {/*  edited by vaibhav, END */}
                {/* END */}

                <div className="absolute right-[44%] z-10 sm:right-[35%] 2xl:top-[42%] md:rotate-[-55deg] md:right-[30%] sm:top-[35%] sm:scale-125  top-[85%]  lg:scale-[140%] 2xl:scale-[160%] md:py-0">
                  <div className="relative right-[-85%]">
                    <Swiper
                      // spaceBetween={0}
                      // slidesPerView={1}
                      effect={"cube"}
                      autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                      }}
                      cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                      }}
                      loop={true}
                      // grabCursor={true}

                      modules={[EffectFlip, Autoplay, EffectCube, EffectFade]}
                      className="h-36 w-36 md:rotate-[55deg] "
                    >
                      <SwiperSlide>
                        <Image
                          src="/01.jpg"
                          fill={true}
                          alt=""
                          className="h-36 w-auto rounded-full object-cover"
                        />
                      </SwiperSlide>
                      {/* <SwiperSlide><Image src={img1} alt="" className='h-36 w-auto' priority /></SwiperSlide> */}
                      <SwiperSlide>
                        <Image
                          src="/02.jpg"
                          fill={true}
                          alt=""
                          className="h-36 rounded-full w-auto object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          src="/03.JPG"
                          fill={true}
                          alt=""
                          className="h-36 rounded-full w-auto object-cover"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="relative h-40 w-40 md:rotate-[55deg] z-20">
                    <Swiper
                      // spaceBetween={0}
                      // slidesPerView={1}
                      effect={"cube"}
                      autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                      }}
                      cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                      }}
                      loop={true}
                      // grabCursor={true}

                      modules={[EffectFlip, Autoplay, EffectCube, EffectFade]}
                      className="h-40 w-40 "
                    >
                      {/* <SwiperSlide><Image src={img1} alt="" className='h-36 w-auto' priority /></SwiperSlide> */}
                      {/* <SwiperSlide><Image src='/04.JPG' alt="" fill={true} className='h-40 rounded-full w-auto object-cover' /></SwiperSlide>
                      <SwiperSlide><Image src='/05.jpeg' alt="" fill={true} className='h-40 rounded-full w-auto object-cover' /></SwiperSlide>
                      <SwiperSlide><Image src='/06.jpeg' fill={true} alt="" className='h-28 rounded-full object-cover w-auto' /></SwiperSlide> */}

                      <SwiperSlide>
                        <Image
                          src="/07.jpeg"
                          fill={true}
                          alt=""
                          className="h-28 rounded-full object-cover w-auto"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          src="/06.jpg"
                          fill={true}
                          alt=""
                          className="h-28 rounded-full object-cover w-auto"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          src="/08.JPG"
                          fill={true}
                          alt=""
                          className="h-28 rounded-full object-cover w-auto"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          src="/09.jpg"
                          fill={true}
                          alt=""
                          className="h-28 rounded-full object-cover w-auto"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  <div className="absolute right-[-90%] bottom-[5%]  md:right-[-105%] h-28 w-28">
                    <Swiper
                      // spaceBetween={0}
                      // slidesPerView={1}
                      effect={"cube"}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                      cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                      }}
                      loop={true}
                      // grabCursor={true}

                      modules={[EffectFlip, Autoplay, EffectCube, EffectFade]}
                      className="h-28 w-28 md:rotate-[55deg] "
                    >
                      {/* <SwiperSlide><Image src={img1} alt="" className='h-36 w-auto' priority /></SwiperSlide> */}

                      <SwiperSlide>
                        <Image
                          src="/04.JPG"
                          alt=""
                          fill={true}
                          className="h-40 rounded-full w-auto object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          src="/05.jpeg"
                          alt=""
                          fill={true}
                          className="h-40 rounded-full w-auto object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          src="/06.jpeg"
                          fill={true}
                          alt=""
                          className="h-28 rounded-full object-cover w-auto"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  {/* <div className='relative right-[-85%] md:rotate-[55deg] '>
                <Image src={img1} alt="" className='h-36 w-auto' priority />
              </div> */}
                  {/* <div className='relative  md:rotate-[55deg]'>
                <Image src={img2} alt="" className='h-40 w-auto' priority />
              </div> */}
                  {/* <div className='absolute right-[-90%] bottom-[5%]  md:right-[-105%] md:rotate-[55deg]'>
                <Image src={img3} alt="" className='h-28 w-auto' priority />
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* vaibhav */}
        <div className="space-y-10">
          <Clients />
          <Portfolio />
          {/* <Growon /> */}
          <Stats />
          <Results2 />
          <Marketing />
          <Refund />
          <Pricing />
          <Faqs />
          <Whatwedo />
          <Testinomials />
          <Founder />
          <Connect />
          <Footer />
        </div>
        {/* vaibhav */}
      </main>
    </>
  );
}
