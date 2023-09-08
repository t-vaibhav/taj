import React, { Component } from "react";
// import { render } from 'react-dom';
import Typed from "react-typed";

const colors = ["transparent", "transparent", "transparent"];
const delay = 2500;

export default function Herotext() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const texts = ["vaibhav", "nitesh", "aman"];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="space-y-2 z-40">
      <h1 className="xl:text-7xl text-3xl md:text-5xl font-medium font-kanit tracking-wide">
        Create
      </h1>
      <h1 className="xl:text-7xl text-3xl md:text-5xl font-medium font-kanit tracking-wide">
        Content That
      </h1>
      <div
        className="text-4xl hero-text font-bold xl:text-7xl md:text-5xl font-kanit animate-text sm:pb-10 pb-2 tracking-wide"
        style={{ fontWeight: "800" }}
      >
        <div className="font-extrabold hero-text">
          <Typed
            strings={["Builds Brand", "Engages Viewers", "Educates Customers"]}
            typeSpeed={100}
            backSpeed={80}
            loop
          />
        </div>
      </div>

      {/* <h1 className='xl:text-6xl text-3xl md:text-5xl font-extrabold font-kanit animate-text'>
                <span className='hero-text font-kanit '>Build  Loyality</span>
            </h1> */}

      <div className="z-40">
        <a href="#pricing">
          <button className="cta-btn text-sm px-4 sm:text-lg md:text-xl  py-2  text-gray-900 sm:px-5 rounded-sm  font-semibold">
            Go Viral
          </button>
        </a>
      </div>
    </div>
  );
}
