import React from "react";

function Card(props) {
  return (
    <div className="w-80 h-80 p-6 flex items-center justify-center flex-col">
      <figure className="w-14.25 h-14.25">
        <img
          src={props.img}
          alt={props.alt}
          className="w-full h-full object-contain"
        />
      </figure>
      <h3 className="font-raleway text-2xl font-semibold mt-4.5">
        {props.title}
      </h3>
      <p className="font-raleway text-[16px] font-medium text-center mt-4.5">
        {props.description}
      </p>
    </div>
  );
}

export default Card;
