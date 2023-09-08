import React from "react";
import Tilt from "react-tilt";

export default function Whatwedo() {
  return (
    <section
      className="max-w-[1220px] px-5 mx-auto py-10 text-mol "
      id="services"
    >
      <h1 className="text-4xl font-kanit font-extrabold py-8 px-2">
        Here&apos;s what we will do for you
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <Tilt className="Tilt" options={{ max: 25, speed: 50 }}>
          <div className="Tilt-inner border  border-orange-500 -rotate-[4deg] h-[385px] w-[291px] mx-auto rounded-[8px] tilt2 my-5">
            <div className="py-10 px-7 text-white hover:text-black h-[385px] w-[291px]  no-tilt2 border border-orange-500 ">
              <h1 className="font-extrabold font-kanit text-4xl">Content</h1>
              <h1 className="font-extrabold font-kanit text-4xl">Production</h1>
              <p className="text-xl pt-2 font-molengo">
                Our team will shoot high quality videos for your content.
              </p>
            </div>
          </div>
        </Tilt>

        <Tilt className="Tilt" options={{ max: 25, speed: 50 }}>
          <div className="Tilt-inner border  border-orange-500 -rotate-[4deg] h-[385px] w-[291px] mx-auto rounded-[8px] tilt2 my-5">
            <div className="py-10 px-7 text-white hover:text-black h-[385px] w-[291px]  no-tilt2 border border-orange-500 ">
              <h1 className="font-extrabold font-kanit text-4xl">Video</h1>
              <h1 className="font-extrabold font-kanit text-4xl">Editing</h1>
              <p className="text-xl pt-2  font-molengo">
                We will create captivating videos using fast paced video
                editing.
              </p>
            </div>
          </div>
        </Tilt>

        {/* previous styling starts */}

        {/* <Tilt className="Tilt" options={{ max: 25, speed: 50 }} >
                    <div className=' border border-orange-500 h-[385px] w-[291px] mx-auto rounded-[8px]  my-5'>
                    <div className='py-10 px-7 text-black h-[385px] w-[291px] border -rotate-[4deg] rounded-[8px] tilt2 border-orange-500'>
                    <div className='rotate-[4deg]'>
                    <h1 className='font-extrabold font-kanit text-4xl'>Content</h1>
                    <h1 className='font-extrabold font-kanit text-4xl'>Research</h1>
                    <p className='text-xl pt-2  font-molengo'>There&apos;s no one size fits all. We&apos;ll help you discover valuable content for your brand</p>
                    </div>
                    </div>
                    </div>
                </Tilt > */}

        {/* previous styling ends */}

        <Tilt className="Tilt" options={{ max: 25, speed: 50 }}>
          <div className=" border border-orange-500 -rotate-[4deg] h-[385px] w-[291px] mx-auto rounded-[8px] tilt2 my-5">
            <div className="text-white hover:text-black py-10 px-7 no-tilt h-[385px] w-[291px]  no-tilt2 border border-orange-500">
              <h1 className="font-extrabold font-kanit text-4xl">Research &</h1>
              <h1 className="font-extrabold font-kanit text-4xl">Writing</h1>
              <p className="text-xl pt-2  font-molengo">
                For each content, we will do the research and write compelling
                copies for you.
              </p>
            </div>
          </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25, speed: 50 }}>
          <div className=" border border-orange-500 -rotate-[4deg] h-[385px] w-[291px] mx-auto rounded-[8px] tilt2 my-5">
            <div className="text-white hover:text-black py-10 px-7 no-tilt h-[385px] w-[291px]  no-tilt2 border border-orange-500">
              <h1 className="font-extrabold font-kanit text-4xl">Graphics</h1>
              <h1 className="font-extrabold font-kanit text-4xl">Designing</h1>
              <p className="text-xl pt-2  font-molengo">
                Our visual design experts will create aesthetic designs that
                stand out.
              </p>
            </div>
          </div>
        </Tilt>

        <Tilt className="Tilt" options={{ max: 25, speed: 50 }}>
          <div className=" border border-orange-500 -rotate-[4deg] h-[385px] w-[291px] mx-auto rounded-[8px] tilt2 my-5">
            <div className="text-white hover:text-black py-10 px-7 no-tilt h-[385px] w-[291px]  no-tilt2 border border-orange-500">
              <h1 className="font-extrabold font-kanit text-4xl">Meme</h1>
              <h1 className="font-extrabold font-kanit text-4xl">Marketing</h1>
              <p className="text-xl pt-2  font-molengo">
                Ideate and create relatable memes that resonated with the
                audience.
              </p>
            </div>
          </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25, speed: 50 }}>
          <div className=" border border-orange-500 -rotate-[4deg] h-[385px] w-[291px] mx-auto rounded-[8px] tilt2 my-5">
            <div className="text-white hover:text-black py-10 px-7 no-tilt h-[385px] w-[291px]  no-tilt2 border border-orange-500">
              <h1 className="font-extrabold font-kanit text-4xl">
                Social Media
              </h1>
              <h1 className="font-extrabold font-kanit text-4xl">Management</h1>
              <p className="text-xl pt-2  font-molengo">
                End-to-end social media management to optimise content and drive
                engagement.
              </p>
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
}
