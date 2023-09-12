import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-tilt";

//import icons
import Diversity2RoundedIcon from "@mui/icons-material/Diversity2Rounded";
import AirportShuttleRoundedIcon from "@mui/icons-material/AirportShuttleRounded";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import FlightLandRoundedIcon from "@mui/icons-material/FlightLandRounded";
import SentimentVerySatisfiedRoundedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
// import required modules
import {
  EffectCards,
  Navigation,
  EffectFade,
  Autoplay,
  Mousewheel,
  Pagination,
  EffectFlip,
} from "swiper";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Footer from "../components/Footer";
import Video from "../components/Video";
import { TurnLeft } from "@mui/icons-material";
export default function Home() {
  const [openNav, setOpenNav] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);

  const influencersData = [
    {
      name: "Ayushman Pandita",
      img: "/taj/creaters/Ayushman.png",
      desc: "Instagram 200K+",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      name: "Riya Upreti",
      img: "/taj/creaters/riya.jfif",
      desc: "Instagram 300K+",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      name: "Bhanu Pathak",
      img: "/taj/creaters/bhanu.jpg",
      desc: "Instagram 750K+",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      name: "Vassundhara Pandita",
      img: "/taj/creaters/vasundhara.jpg",
      desc: "Instagram 900K+",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      name: "Kriti Sharma",
      img: "/taj/creaters/kriti.jpg",
      desc: "Insta & Youtube 300K+",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      name: "Shivansh Garg",
      img: "/taj/creaters/shivansh.jpeg",
      desc: "Instagram 200K+",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      name: "Divyanshi Singhal",
      img: "/taj/creaters/divyanshi.jpeg",
      desc: "Instagram 10K+",
      insta: "",
      facebook: "",
      linkedin: "",
    },
  ];

  const influencersRecords = influencersData.map((item, index) => {
    return (
      <Tilt key={index}>
        <div className="h-[450px] border-2 border-orange-500 rounded-md shadow-md shadow-orange-400">
          <img
            src={item.img}
            className="rounded-md  border-b-2 border-white object-cover h-4/5 w-full"
          />
          <div className="h-1/5 py-2">
            <h1 className="text-3xl font-bold text-yellow-500 text-center">
              {item.name}
            </h1>
            <div className="flex justify-center space-x-5 pt-1">
              {/* <Link href="/taj">
                <InstagramIcon className="text-4xl text-red-500" />
              </Link>
              <Link href="/taj">
                <LinkedInIcon className="text-4xl text-red-500" />
              </Link>
              <Link href="/taj">
                <FacebookIcon className="text-4xl text-red-500" />
              </Link> */}
              <h1 className="text-2xl font-bold text-red-500 text-center">
                {item.desc}
              </h1>
            </div>
          </div>
        </div>
      </Tilt>
    );
  });

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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black overflow-hidden">
        {/* <Navbar className="mx-auto max-w-screen-xl pb-3 pt-6 px-4 lg:px-8 lg:py-4  bg-transparent navbar fixed top-0 left-0 right-0 bg-black z-10 ">
          <div className="container mx-auto flex items-center justify-between  text-blue-gray-900">
            <Image
              src="/logo.png"
              alt={"team-member-image"}
              height={100}
              width={100}
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
        </Navbar> */}

        {/* hero section starts */}

        <div className="  h-[40vh] md:h-[100vh] relative ">
          <Swiper
            effect={"fade"}
            mousewheel={true}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, EffectFade, Autoplay, EffectFlip]}
            className="swiper  "
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="">
              <img
                src="/taj/taj.jpg"
                alt="taj"
                className="object-cover h-[40vh] md:h-[100vh] w-full "
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                src="/taj/taj5.jpg"
                alt="taj"
                className="object-cover h-[40vh] md:h-[100vh] w-full "
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                src="/taj/taj10.jpg"
                alt="taj"
                className="object-cover h-[40vh] md:h-[100vh] w-full "
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                src="/taj/taj6.jpg"
                alt="taj"
                className="object-cover h-[40vh] md:h-[100vh] w-full "
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                src="/taj/taj11.jpg"
                alt="taj"
                className="object-cover h-[40vh] md:h-[100vh] w-full "
              />
            </SwiperSlide>
          </Swiper>
          <div className="z-20 bg-black/50 h-[40vh] md:h-[100vh] absolute top-0 left-0 right-0 bottom-0"></div>
          <div className=" text-[#f5f5f5]  text-shadow  absolute top-[80%] md:top-[85%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center ">
            <h1 className="md:pb-3 w-[90vw]"> One Day Taj Mahal Trip </h1>
            <h1 className="text-red-500"> With Creaters </h1>
            <ExpandMoreIcon className="text-3xl md:text-5xl animate-bounce text-shadow" />
          </div>
        </div>

        {/* hero section ends */}

        <div className="bg-black text-white">
          <div className="max-w-screen-xl mx-auto">
            {/* pop up */}
            <div
              className={`h-[20vh] bg-black border-2 border-[#f5f5f5] z-50 duration-500 flex items-center justify-center ${
                openPopUp
                  ? "fixed top-0 left-0 right-0"
                  : "-translate-y-full hidden"
              }`}
            >
              <div className="">
                <h1 className="text-center py-3 md:py-5 text-3xl md:text-5xl font-bold">
                  Ticket will be released soon!
                </h1>
                <div
                  className="flex justify-center"
                  onClick={(state) => {
                    setOpenPopUp(false);
                  }}
                >
                  <button className="bg-[#FF351F] text-sm md:px-4 px-2 sm:text-lg md:text-xl  py-1 md:py-2  text-gray-900 sm:px-5 rounded-sm  font-semibold">
                    Close
                  </button>
                </div>
              </div>
            </div>
            {/* pop up */}

            {/* about us section start */}
            <div className="md:py-20  px-3">
              <div className="grid col-span-1 md:grid-cols-12 ">
                <div className="col-span-1 md:col-span-7 lg:col-span-8">
                  <h1 className="text-3xl md:text-5xl font-bold font-kanit py-10">
                    About <span className="hero-text ">The Trip</span>
                  </h1>
                  <div className="text-lg md:text-2xl space-y-5">
                    <p>
                      Ayushman Pandita and Growth Rocket are organising a one
                      day community trip to Taj Mahal on 23rd September. We will
                      be taking 100+ followers for this one day trip and we will
                      also be joined by some of the top creators of India!
                    </p>
                    <p>
                      This will be an amazing opportunity for you to travel,
                      make new friends, network with creators and create content
                      together.
                    </p>
                    <p>
                      Want more? You will also participate in many games and
                      challenges throughout the trip and win cash prizes worth
                      Rs. 75,000!
                    </p>
                    <p>
                      But hurry, because there are only limited seats available.
                    </p>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-5 lg:col-span-4">
                  <div className="block border border-orange-500 mx-auto h-[532px] w-[300px]  rounded-[8px] tilt3 my-5">
                    <div className="py-10 px-7 no-tilt h-[532px] w-[300px]  no-tilt3 border border-orange-500 flex justify-center">
                      <Image
                        src={"/founder.jpg"}
                        fill={true}
                        alt={"display picture"}
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="flex justify-center py-10"
                  onClick={() => {
                    setOpenPopUp(true);
                  }}
                >
                  <button className="bg-[#FF351F] text-sm px-4 sm:text-lg md:text-xl  py-2  text-gray-900 sm:px-5 rounded-sm  font-semibold">
                    Book Tickets
                  </button>
                </div>
              </div>
            </div>
            {/* about us section end */}

            {/* images 2 start */}
            {/* <div className=" flex justify-center items-center h-[50vh] md:h-[80vh] ">
              <Swiper
                effect={"fade"}
                mousewheel={true}
                grabCursor={true}
                navigation={true}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, EffectFade, Autoplay, EffectFlip]}
                className="swiper object-contain flex"
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className="relative">
                  <img
                    src="/taj/taj.jpg"
                    alt="taj"
                    className="object-cover h-[50vh] md:h-[80vh] w-full"
                  />
                </SwiperSlide>
                <SwiperSlide className="relative">
                  <img
                    src="/taj/taj2.jpg"
                    alt="taj"
                    className="object-cover h-[50vh] md:h-[80vh] w-full"
                  />
                </SwiperSlide>
                <SwiperSlide className="relative">
                  <img
                    src="/taj/taj3.jpg"
                    alt="taj"
                    className="object-cover h-[50vh] md:h-[80vh] w-full"
                  />
                </SwiperSlide>
                <SwiperSlide className="relative">
                  <img
                    src="/taj/taj5.jpg"
                    alt="taj"
                    className="object-cover h-[50vh] md:h-[80vh] w-full"
                  />
                </SwiperSlide>
                <SwiperSlide className="relative">
                  <img
                    src="/taj/taj6.jpg"
                    alt="taj"
                    className="object-cover h-[50vh] md:h-[80vh] w-full"
                  />
                </SwiperSlide>
                <SwiperSlide className="relative">
                  <img
                    src="/taj/taj7.jpg"
                    alt="taj"
                    className="object-cover h-[50vh] md:h-[80vh] w-full"
                  />
                </SwiperSlide>
                <SwiperSlide className="relative">
                  <img
                    src="/taj/taj8.jpg"
                    alt="taj"
                    className="object-cover h-[50vh] md:h-[80vh] w-full"
                  />
                </SwiperSlide>
              </Swiper>
            </div> */}
            {/* images 2 end */}

            {/* itenary section start */}
            <div className="py-5 md:pb-20   md:pt-10 px-4">
              <h1 className=" text-3xl md:text-5xl font-bold font-kanit py-5 md:py-10">
                FULL DAY <span className="hero-text ">ITINERARY</span>
              </h1>
              <h3 className="2xl md:text-3xl pb-20">
                Here&apos;s the tentative Itinerary for this one day trip on
                23rd September
              </h3>
              <div className="px-2">
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    contentStyle={{
                      background: "rgb(234, 179, 8)",
                      color: "#fff",
                      fontSize: "10px",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(234, 179, 8)",
                    }}
                    date="5:30 AM"
                    dateClassName="big-text"
                    iconStyle={{
                      background: "rgb(239, 68, 68)",
                      color: "#fff",
                    }}
                    style={{ fontSize: "" }}
                    icon={<Diversity2RoundedIcon />}
                  >
                    <div className="text-2xl font-bold text-black">
                      Assembly at common point in Delhi
                    </div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(234, 179, 8)",
                      color: "#fff",
                      fontSize: "10px",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(234, 179, 8)",
                    }}
                    date="6:00 AM "
                    dateClassName="big-text"
                    iconStyle={{
                      background: "rgb(239, 68, 68)",
                      color: "#fff",
                    }}
                    icon={<AirportShuttleRoundedIcon />}
                  >
                    <div className="text-2xl font-bold text-black">
                      Departure from Delhi
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(234, 179, 8)",
                      color: "#fff",
                      fontSize: "10px",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(234, 179, 8)",
                    }}
                    date="9:00 AM "
                    dateClassName="big-text"
                    iconStyle={{
                      background: "rgb(239, 68, 68)",
                      color: "#fff",
                    }}
                    icon={<FastfoodRoundedIcon />}
                  >
                    <div className="text-2xl font-bold text-black">
                      BreakFast Stop
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(234, 179, 8)",
                      color: "#fff",
                      fontSize: "10px",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(234, 179, 8)",
                    }}
                    date="11:00 AM "
                    dateClassName="big-text"
                    iconStyle={{
                      background: "rgb(239, 68, 68)",
                      color: "#fff",
                    }}
                    icon={<FlightLandRoundedIcon />}
                  >
                    <div className="text-2xl font-bold text-black">
                      Arrival in Agra
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(234, 179, 8)",
                      color: "#fff",
                      fontSize: "10px",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(234, 179, 8)",
                    }}
                    date="11:00 AM "
                    dateClassName="big-text"
                    iconStyle={{
                      background: "rgb(239, 68, 68)",
                      color: "#fff",
                    }}
                    icon={<SentimentVerySatisfiedRoundedIcon />}
                  >
                    <div className="text-2xl font-bold text-black">
                      Entry in Taj Mahal
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(234, 179, 8)",
                      color: "#fff",
                      fontSize: "10px",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(234, 179, 8)",
                    }}
                    date="5:30 PM "
                    dateClassName="big-text"
                    iconStyle={{
                      background: "rgb(239, 68, 68)",
                      color: "#fff",
                    }}
                    icon={<Diversity2RoundedIcon className="text-4xl" />}
                  >
                    <div className="text-2xl font-bold text-black">
                      Assebly at commmon point near Taj Mahal
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(234, 179, 8)",
                      color: "#fff",
                      fontSize: "10px",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(234, 179, 8)",
                    }}
                    date="6:00 PM "
                    dateClassName="big-text"
                    iconStyle={{
                      background: "rgb(239, 68, 68)",
                      color: "#fff",
                    }}
                    icon={<AirportShuttleRoundedIcon />}
                  >
                    <div className="text-2xl font-bold text-black">
                      Departure from Agra
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(234, 179, 8)",
                      color: "#fff",
                      fontSize: "10px",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(234, 179, 8)",
                    }}
                    date="10:00 PM "
                    dateClassName="big-text"
                    iconStyle={{
                      background: "rgb(239, 68, 68)",
                      color: "#fff",
                    }}
                    icon={<HomeRoundedIcon />}
                  >
                    <div className="text-2xl font-bold text-black">
                      Arrival in Delhi
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    dateClassName="big-text"
                    iconStyle={{
                      background: "rgb(16, 204, 82)",
                      color: "#fff",
                    }}
                    icon={<DisabledByDefaultRoundedIcon />}
                  />
                </VerticalTimeline>
              </div>
            </div>
            {/* itenary section end */}

            {/* brands section start */}
            <div className="py-10 px-4">
              <h1 className=" text-3xl md:text-5xl font-bold font-kanit py-10">
                Our <span className="hero-text ">Partners</span>
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
                        slidesPerView: 3,
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
                    <SwiperSlide className="swipeslide flex justify-center lg:p-0  md:p-10 p-16">
                      <Image
                        src={"/logo.png"}
                        height={70}
                        width={250}
                        alt={"pokerbazi"}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swipeslide flex justify-center lg:p-0  md:p-10 p-16">
                      <Image
                        src={"/brands/spur.png"}
                        height={70}
                        width={250}
                        alt={"pokerbazi"}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swipeslide flex justify-center lg:p-0  md:p-10 p-16">
                      <Image
                        src={"/brands/pokerbazi.png"}
                        height={70}
                        width={250}
                        alt={"pokerbazi"}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            {/* brands section end */}

            {/* influencers start */}
            <div className="py-10 px-5">
              <h1 className=" text-3xl md:text-5xl font-bold font-kanit py-10">
                Meet & Travel With Your{" "}
                <span className="hero-text ">Favourite Creators</span>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {influencersRecords}
              </div>
            </div>
            {/* influencers end */}

            {/* pricing section starts */}
            <div className="py-16 md:py-20 px-5">
              <div className=" border border-orange-500 -rotate-2 mt-8 w-full rounded-[8px]">
                <div className="py-10 lg:px-10 lg:flex flex-row space-y-10 lg:space-y-0 justify-between w-full no-tilt   items-center">
                  <h1 className="md:text-5xl sm:text-3xl text-2xl w-full text-black font-extrabold font-kanit capitalize text-center popping-text ">
                    BOOK YOUR SEAT NOW FOR Rs. 499 ONLY!
                  </h1>
                </div>
              </div>
              <div className="text-xl md:text-4xl pt-5 md:pt-20 md:py-20 space-y-3">
                <h1 className=" text-3xl md:text-5xl font-bold font-kanit pt-20 py-10">
                  What will I get as a{" "}
                  <span className="hero-text ">part of this booking?</span>
                </h1>
                <div className="pl-5 md:pl-10 space-y-3 ">
                  <li>Bus travel between Delhi and Agra</li>
                  <li>Taj Mahal entry tickets</li>
                  <li>Snacks and munchies</li>
                  <li>Merchandise from our sponsors</li>
                  <li>Experience of a lifetime</li>
                </div>
              </div>
              <div className="text-3xl md:text-5xl font-bold md:py-16 py-10 text-yellow-500 text-center">
                We have only 100 seats available. So hurry and book your seat
                now!
              </div>

              <div>
                <div
                  className="flex justify-center py-10"
                  onClick={(state) => {
                    setOpenPopUp(true);
                  }}
                >
                  <button className="bg-[#FF351F] text-sm px-4 sm:text-lg md:text-xl  py-2  text-gray-900 sm:px-5 rounded-sm  font-semibold">
                    Book Tickets
                  </button>
                </div>
              </div>
            </div>
            {/* pricing section ends */}
          </div>
          {/* footer starts */}
          <Footer />
          {/* footer ends  */}
        </div>
      </main>
    </>
  );
}
