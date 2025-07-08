import React from "react";

const CardSection = () => {
  return (
    <div className="h-[200vh] w-full">
      <div
        style={{ margin: "10px auto", paddingTop: "8rem" }}
        className=" flex flex-col justify-center items-center font-bold text-[3.50rem] text-dark-200"
      >
        <h3 className="uppercase leading-1.5">Explore</h3>
        <h3 className="font-editorial-light text-[4rem]">pure potency</h3>
      </div>
      <div className="flex" style={{ paddingTop: "5rem" }}>
        <div className="w-full h-1/2 aspect-square">
          <img src="/images/explore-1.jpg " className="h-full w-full" />
        </div>
        <div className="w-full h-full" style={{ margin: "5rem 0 0 4rem" }}>
          <div className="text-[2.85rem] text-dark-200 leading-12">
            <h3>Pure</h3>
            <h3 className="font-editorial-italic">Brilliance</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
