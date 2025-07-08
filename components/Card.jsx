import React from "react";

const Card = ({ type, icon, image, heading1, heading2, price }) => {
  return (
    <div
      className="bg-red-900 rounded-2xl w-full h-full"
      style={{ padding: "1rem" }}
    >
      <div>
        <div className="flex justify-between items-center">
          <div
            className="bg-light-300 uppercase text-[0.4rem] rounded-2xl"
            style={{ padding: "0.4rem" }}
          >
            <p>{type}</p>
          </div>
          <div
            className="bg-light-400 flex justify-center items-center rounded-2xl"
            style={{ padding: "0.3rem" }}
          >
            <img src={icon} alt="icon" className="size-4" />
          </div>
        </div>
        <div>
          <img src={image} alt="icons" />
        </div>
        <div className="text-dark-200">
          <h3 className="text-[0.5rem] leading-1.5">{heading1}</h3>
          <div className="flex justify-between items-center">
            <h3>{heading2}</h3>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
