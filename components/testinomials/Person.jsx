import React from "react";
import Image from "next/image";

export default function Person(props) {
  return (
    <div className=" lg:my-3  lg:mx-auto mx-3 mb-3">
      <div className="py-5 lg:py-10  shadow-lg shadow-orange-400 border border-orange-400 bg-black text-white h-full rounded-se-3xl rounded-es-3xl">
        <div className=" flex-col items-center justify-center  ">
          <Image
            src={props.imgSrc}
            height={300}
            width={300}
            alt="logo"
            className="mx-auto object-cover h-[100px] w-[100px] rounded-full shadow-gray-700 shadow-md"
          />
          <img
            width="40"
            height="40"
            src="/inv.png"
            alt="quote-left"
            className="mx-auto py-2 pt-4"
          />
        </div>
        <div className="md:col-span-7  px-3 md:pr-5 ck ">
          <p className="text-md font-molengo font-medium px-6 md:max-h-[25vh] overflow-auto">
            {props.subTitle}
          </p>

          <div className="border border-[#f5f5f5] mx-2 my-8"></div>
          <h3 className="text-2xl font-kanit text-right font-semibold text-yellow-500">
            {props.title}
          </h3>
          <h3 className="text-xl font-kanit text-right font-medium text-red-400">
            {props.position}
          </h3>
        </div>
      </div>
    </div>
  );
}
