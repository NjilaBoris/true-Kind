import React from "react";

const Button = ({ otherClasses, imageClasses, icon }) => {
  return (
    <div
      className={`size-12  bg-dark-400  cursor-pointer rounded-full relative flex justify-center items-center  ${otherClasses}`}
    >
      <img
        src={`${icon}`}
        alt="icon"
        className={`size-8 absolute ${imageClasses}`}
      />
    </div>
  );
};

export default Button;
