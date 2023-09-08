import React from "react";

export default function Heading(props) {
  return (
    <section>
      <div className="h-[30px] flex">
        <h1 className="text-lg text-[#FF341D] font-bold font-kanit uppercase">
          {props.title}
        </h1>
      </div>
    </section>
  );
}
