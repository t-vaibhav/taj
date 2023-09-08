import React from "react";
import Heading from "./Heading";

export default function Connect() {
  return (
    <section
      className="max-w-screen-lg sm:mx-auto mr-auto py-10 px-8"
      id="contact"
    >
      <div className="sm:flex sm:justify-center">
        <Heading title="CONTACT US" />
      </div>
      <h1 className="text-5xl mx-auto font-extrabold font-kanit py-3 sm:text-center text-left">
        Let&apos;s connect
      </h1>
      <div className="flex sm:justify-center">
        <div className="sm:space-x-10  py-2 sm:flex  sm:space-y-0 space-y-3 sm:justify-center ">
          <div className="flex justify-start">
            <a href="https://calendly.com/ayushman-a5i/growth-rocket-book-a-call" target="blank">
              <button className="py-3 px-10 cta-btn text-black font-semibold">
                Book Call
              </button>
            </a>
          </div>

          <div>
            <a href="https://wa.me/918819962732" target="blank">
              <button className="py-3 px-10 cta-btn text-black font-semibold">
                Chat On Whatsapp
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
