
import React from "react";
import { useState, useEffect } from "react";

const colors = ["transparent", "transparent", "transparent"];
const delay = 2500;

export default function Test() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    const texts = ['vaibhav', 'nitesh', 'aman',]

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
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundColor }}
                    >
                        {texts[index]}
                    </div>
                ))}
            </div>

        </div>
    );
}
