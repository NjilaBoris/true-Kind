import React from "react";

const Button = ({ otherClasses, icon }) => {
  return (
    <div
      className={`size-12 bg-dark-400 rounded-full relative flex justify-center items-center  ${otherClasses}`}
      style={{ padding: "1.5rem" }}
    >
      <img src={`${icon}`} alt="icon" className="size-8 absolute" />
    </div>
  );
};

export default Button;
