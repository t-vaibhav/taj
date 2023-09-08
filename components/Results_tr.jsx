import Image from "next/image";
import React from "react";
import Heading from "./Heading";

export default function Results() {
  return (
    <section id="results" className="max-w-[1180px] mx-auto px-3  text-white bg-black py-16 ">
      <Heading title="Our results speak bolder" />
      {/* type - 1 starts*/}
      <div className="py-20">
        <div className=" border border-orange-500 -rotate-2 my-16   rounded-[8px] mx-3">
          <div className="grid md:grid-cols-12 gap-10 py-10 no-tilt  text-black">
            <div className="md:col-span-5 flex items-center justify-center">
              <Image src="/fisdom.svg" height={300} width={300} alt="loogo" />
            </div>
            <div className="md:col-span-7 space-y-5 px-3 md:pr-5">
              <h1 className="text-5xl font-kanit font-bold">Fisdom</h1>
              <h3 className="text-3xl font-kanit font-semibold">
                1100% Increase in views within 45 days
              </h3>
              <p className="text-lg font-molengo font-medium">
                Fisdom&apos;s Instagram reels used to get an average of 300-400
                organic views. After partnering with us, their average views on
                reels skyrocketed to 3500 in less than 45 days.
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-orange-500 -rotate-2 my-16  rounded-[8px] mx-3">
          <div className="grid md:grid-cols-12 gap-10 py-10 no-tilt  text-black">
            <div className="md:col-span-5 flex items-center justify-center">
              <Image src="/rangde.svg" height={300} width={300} alt="loogo" />
            </div>
            <div className="md:col-span-7 space-y-5 px-3 md:pr-5">
              <h1 className="text-5xl font-kanit font-bold">Rang De</h1>
              <h3 className="text-3xl font-kanit font-semibold">
                800% more views on same content topic
              </h3>
              <p className="text-lg font-molengo font-medium">
                RangDe created a reel in house on one of their success stories
                and it got 6800 views. We created a reel on the exact same topic
                and it went viral with over 61,000 views!
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-orange-500 -rotate-2 my-16  rounded-[8px] mx-3">
          <div className="grid md:grid-cols-12 gap-10 py-10 no-tilt  text-black">
            <div className="md:col-span-5 flex items-center justify-center">
              <Image src="/fisdom.svg" height={300} width={300} alt="loogo" />
            </div>
            <div className="md:col-span-7 space-y-5 px-3 md:pr-5">
              <h1 className="text-5xl font-kanit font-bold ">Formula Guy</h1>
              <h3 className="text-3xl font-kanit font-semibold">
                50,000 followers and 5 million lifetime views in 6 months
              </h3>
              <p className="text-lg font-molengo font-medium">
                Formula Guy&apos;s personal brand page gained over 50,000
                followers and over 5 million views in less than 6 months.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* type-1 ends */}
      {/* type-2 starts*/}
      <div className="py-20">
        <div className=" border border-orange-500  mx-auto rounded-[8px] my-16 tilt4">
          <div className="grid md:grid-cols-12 gap-10 py-10 pt-16 no-tilt no-tilt4 border-orange-500 border ">
            <div className="md:col-span-5 flex items-center justify-center ">
              <Image src="/fisdom.svg" height={300} width={300} alt="loogo" />
            </div>
            <div className="md:col-span-7 space-y-5 px-3 md:pr-5">
              <h1 className="text-5xl font-kanit font-bold text-yellow-500">
                Fisdom
              </h1>
              <h3 className="text-3xl font-kanit font-semibold">
                1100% Increase in views within 45 days
              </h3>
              <p className="text-lg font-molengo font-medium">
                Fisdom&apos;s Instagram reels used to get an average of 300-400
                organic views. After partnering with us, their average views on
                reels skyrocketed to 3500 in less than 45 days.
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-orange-500  mx-auto rounded-[8px] my-16 tilt4">
          <div className="grid md:grid-cols-12 gap-10 py-10 pt-16 no-tilt no-tilt4 border-orange-500 border ">
            <div className="md:col-span-5 flex items-center justify-center ">
              <Image src="/rangde.svg" height={300} width={300} alt="loogo" />
            </div>
            <div className="md:col-span-7 space-y-5 px-3 md:pr-5">
              <h1 className="text-5xl font-kanit font-bold text-yellow-500">
                Rang De
              </h1>
              <h3 className="text-3xl font-kanit font-semibold">
                800% more views on same content topic
              </h3>
              <p className="text-lg font-molengo font-medium">
                RangDe created a reel in house on one of their success stories
                and it got 6800 views. We created a reel on the exact same topic
                and it went viral with over 61,000 views!
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-orange-500  mx-auto rounded-[8px] my-16 tilt4">
          <div className="grid md:grid-cols-12 gap-10 py-10 pt-16 no-tilt no-tilt4 border-orange-500 border ">
            <div className="md:col-span-5 flex items-center justify-center ">
              <Image src="/fisdom.svg" height={300} width={300} alt="loogo" />
            </div>
            <div className="md:col-span-7 space-y-5 px-3 md:pr-5">
              <h1 className="text-5xl font-kanit font-bold text-yellow-500 ">
                Formula Guy
              </h1>
              <h3 className="text-3xl font-kanit font-semibold">
                50,000 followers and 5 million lifetime views in 6 months
              </h3>
              <p className="text-lg font-molengo font-medium">
                Formula Guy&apos;s personal brand page gained over 50,000
                followers and over 5 million views in less than 6 months.
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
      {/* type-2 ends */}

      {/* type-3 starts */}

      <div className="py-20">
        <div className=" border border-orange-500  mx-auto rounded-[8px] my-16 tilt4">
          <div className="grid md:grid-cols-12 gap-10 py-10 pt-16 no-tilt no-tilt4 border-orange-500 border bg-white-imp">
            <div className="md:col-span-5 flex items-center justify-center ">
              <Image src="/fisdom.svg" height={300} width={300} alt="loogo" />
            </div>
            <div className="md:col-span-7 space-y-5 px-3 md:pr-5 text-black">
              <h1 className="text-5xl font-kanit font-bold text-red-700">
                Fisdom
              </h1>
              <h3 className="text-3xl font-kanit font-semibold">
                1100% Increase in views within 45 days
              </h3>
              <p className="text-lg font-molengo font-medium">
                Fisdom&apos;s Instagram reels used to get an average of 300-400
                organic views. After partnering with us, their average views on
                reels skyrocketed to 3500 in less than 45 days.
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-orange-500  mx-auto rounded-[8px] my-16 tilt4">
          <div className="grid md:grid-cols-12 gap-10 py-10 pt-16 no-tilt no-tilt4 border-orange-500 border bg-white-imp">
            <div className="md:col-span-5 flex items-center justify-center ">
              <Image src="/rangde.svg" height={300} width={300} alt="loogo" />
            </div>
            <div className="md:col-span-7 space-y-5 px-3 md:pr-5 text-black">
              <h1 className="text-5xl font-kanit font-bold text-red-700">
                Rang De
              </h1>
              <h3 className="text-3xl font-kanit font-semibold">
                800% more views on same content topic
              </h3>
              <p className="text-lg font-molengo font-medium">
                RangDe created a reel in house on one of their success stories
                and it got 6800 views. We created a reel on the exact same topic
                and it went viral with over 61,000 views!
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-orange-500  mx-auto rounded-[8px] my-16 tilt4">
          <div className="grid md:grid-cols-12 gap-10 py-10 pt-16 no-tilt no-tilt4 border-orange-500 border bg-white-imp">
            <div className="md:col-span-5 flex items-center justify-center ">
              <Image src="/fisdom.svg" height={300} width={300} alt="loogo" />
            </div>
            <div className="md:col-span-7 space-y-5 px-3 md:pr-5 text-black">
              <h1 className="text-5xl font-kanit font-bold text-red-700 ">
                Formula Guy
              </h1>
              <h3 className="text-3xl font-kanit font-semibold">
                50,000 followers and 5 million lifetime views in 6 months
              </h3>
              <p className="text-lg font-molengo font-medium">
                Formula Guy&apos;s personal brand page gained over 50,000
                followers and over 5 million views in less than 6 months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// <div className="grid md:grid-cols-12 gap-10 py-10 pt-16  ">
//         <div className="md:col-span-5 flex items-center justify-center mx-auto">
//           <Image src="/fisdom.svg" height={300} width={300} alt="loogo" />
//         </div>
//         <div className="md:col-span-7 space-y-5">
//           <h1 className="text-5xl font-kanit font-bold text-yellow-500">
//             Formula Guy
//           </h1>
//           <h3 className="text-3xl font-kanit font-semibold">
//             50,000 followers and 5 million lifetime views in 6 months
//           </h3>
//           <p className="text-lg font-molengo font-medium">
//             Formula Guy&apos;s personal brand page gained over 50,000 followers
//             and over 5 million views in less than 6 months.
//           </p>
//         </div>
//       </div>
