import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";

export default function Founder() {
  return (
    <section className="max-w-[1180px] mx-auto py-10 space-y-16 sm:px-5 px-1">
      <div>
        {/* <h1 className='text-4xl px-2 font-extrabold font-kanit py-3'>Youtube Marketing</h1> */}
        <div className="lg:hidden block px-3">
          <Heading title="meet the founder" />
        </div>
        <div>
          <div className="lg:flex flex-row px-2 justify-between">
            <div className="block mx-5 border border-orange-500  h-[576px] w-[325px] mx-auto rounded-[8px] tilt3 my-5  relative">
              <div className="py-10 px-7 no-tilt h-[576px] w-[325px]  no-tilt3 border border-orange-500">
                <Image
                  src={"/founder.jpg"}
                  fill={true}
                  alt={"display picture"}
                  className="object-cover"
                />
              </div>
              <div className="py-1 px-7 text-black font-semibold sm:scale-125 border border-orange-500 rotate-[4deg] tilt3 absolute top-5 sm:top-10 left-0 md:text-sm">
                <h2>Ayushman Pandita </h2>
                <div className="flex space-x-1 items-center">
                  <div className="flex">
                    <Link
                      href="https://www.instagram.com/xyushmxn/"
                      target="blank"
                    >
                      <AiOutlineInstagram className="text-xl" />
                    </Link>
                  </div>
                  <div className="flex">
                    <Link
                      href="https://www.youtube.com/@AyushmanPandita"
                      target="blank"
                    >
                      <AiOutlineYoutube className="text-xl" />
                    </Link>
                  </div>
                  <div>400,000+</div>
                </div>
              </div>
            </div>

            <div className="lg:ml-16 flex items-center pb-5 px-1">
              <div>
                <div className="lg:block hidden">
                  <h1 className=" text-3xl md:text-3xl font-bold font-kanit ">
                    Meet <span className="hero-text "> The Founder</span>
                  </h1>
                </div>
                <div className="py-7 space-y-2">
                  <h1 className="text-5xl font-bold font-kanit">
                    Ayushman Pandita
                  </h1>
                  <h1 className="text-2xl font-bold font-kanit text-yellow-500">
                    250,000+ Youtube | 150,000+ Instagram
                  </h1>
                  {/* <h1 className='text-2xl font-bold font-kanit'></h1> */}
                </div>
                <p className="text-xl font-molengo">
                  As an entrepreneur and content creator, Ayushman has a passion
                  for creating exceptional content that resonates with
                  audiences. His journey began in February 2021 when he started
                  making finance videos on YouTube for India&#39;s youth. After
                  his success on Youtube, he launched his Instagram account in
                  August 2022 and scaled to 1 lakh followers in less than 4
                  months.
                </p>
                <p className="text-xl font-molengo pt-4">
                  Ayushman completed his BTech in Computer Science from IIITD in
                  2020. He previously worked as a Software Engineer at HSBC and
                  as a Product Manager at BharatPe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
