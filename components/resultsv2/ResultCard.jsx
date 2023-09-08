import React, { useState } from "react";
import Image from "next/image";
import Tilt from "react-tilt";

export default function ResultCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Tilt
      className="Tilt  h-full  md:scale-100 "
      options={{ max: 25, speed: 50 }}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`border-[3px] border-orange-500 shadow-md shadow-orange-400  h-full scale-[90%] md:scale-100  mx-auto rounded-[8px]  mt-5 `}
      >
        <div className=" text-white grid grid-cols-12  h-full py-5  ">
          <div className="md:col-span-3 col-span-12 flex items-center justify-center  rounded-sm">
            <div className="md:w-[150px] md:h-[150px] h-[250px] w-[250px] bg-yellow-200 rounded-md object-cover flex">
              <Image
                src={props.imgSrc}
                height={250}
                width={250}
                alt="brand logo"
                className="p-1 object-contain"
              />
            </div>
          </div>
          <div className="md:col-span-9 col-span-12 space-y-5 pt-5  px-6 md:pr-5 ">
            <h3
              className={`${
                isHovered ? "text-yellow-500" : "text-yellow-500"
              }  text-3xl font-kanit  font-semibold`}
            >
              {props.title}
            </h3>
            <p className="text-base font-molengo font-medium">
              {props.subTitle}
            </p>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

// <div className=" border border-orange-500   mx-auto rounded-[8px] my-5 lg:my-16 tilt4 hover:scale-110 duration-300 ease-in  ">
//   <div className=" py-10 pt-16 no-tilt no-tilt4 border-orange-500 border bg-white-imp h-full">
//     <div className=" flex items-center justify-center h-[200px] mb-3">
//       <Image
//         src={props.imgSrc}
//         height={200}
//         width={300}
//         alt="brand logo"
//         className="p-5"
//       />
//     </div>
//     <div className="md:col-span-7 space-y-5  px-6 md:pr-5 text-black">
//       {/* <h1 className="text-5xl font-kanit pt-5 font-bold text-red-700 text-center">
//           {props.name}
//         </h1> */}
//       <h3 className="text-2xl font-kanit  font-semibold">{props.title}</h3>
//       <p className="text-md font-molengo font-medium">{props.subTitle}</p>
//     </div>
//   </div>
// </div>;
