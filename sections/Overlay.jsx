import React from "react";

const Overlay = () => {
  const number = "0027659989";
  // Group digits into chunks of 2
  const groups = [];
  for (let i = 0; i < number.length; i += 2) {
    groups.push(number.slice(i, i + 2));
  }
  return (
    <div className="w-full relative z-100 h-dvh bg-dark-100 text-white">
      <div className="absolute top-0 w-full h-full flex">
        <div className="w-full h-full bg-[#303030]"></div>
        <div className="w-full h-full bg-[#303030]"></div>
      </div>
      <div className="absolute top-[40%] left-2/5 flex gap-[0.2rem] translate-1/2">
        <div
          className="words text-[2rem] pr-[0.8rem]  -left-[0.5rem] "
          id="#word-1"
        >
          <h1 className="font-editorial-italic">
            <span>Kind</span>
          </h1>
        </div>
        <div className="words text-[2rem]" id="#word-2">
          <h1>Root</h1>
        </div>
      </div>

      <div
        className="absolute top-0 left-[50.4%] origin-[center_-50%]
       w-[1px] h-full bg-white"
      ></div>

      <div className="absolute bottom-[10%] left-[50.4%] -translate-x-1/2 overflow-hidden">
        <div
          className="size-[50px] border-[1.4px] border-solid
         border-[#fff] rounded-[50%] border-t-[#ffffff20] animate-spin"
        />
      </div>
      {groups.map((group, groupIndex) => (
        <div className="count" key={groupIndex}>
          {group.split("").map((digit, digitIndex) => (
            <div className="digit" key={digitIndex}>
              <h1>{digit}</h1>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Overlay;
