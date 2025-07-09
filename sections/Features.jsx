import React from "react";

const Features = () => {
  return (
    <div
      className="bg-dark-200 h-[120vh] w-full flex items-center"
      style={{ padding: "3rem" }}
    >
      <div className="h-full w-full bg-light-300">
        <div className="overflow-hidden">
          <img
            src="/images/shop-hero.jpg"
            className="h-full w-full  transition-transform hover:scale-[1] cursor-pointer scale-[1.1]"
          />
        </div>
        <div className="flex flex-col gap-5" style={{ padding: "2rem" }}>
          <h3 className="font-ppmori-bold max-w-md text-[1.25rem] text-dark-200 leading-6">
            Beauty Secrets from Around the World: Rituals and Ingredients You
            Need to Try
          </h3>
          <p className="text-[0.78rem] w-full max-w-[45rem] text-light-800">
            Drawing from our rich ayurvedic legacy of over 30 years and
            embracing dermal science, we aim to create transparent skincare that
            is incredibly effective, safe and without harming the environment or
            the planet.
          </p>
          <div className="flex items-center justify-between text-light-800 text-[0.7rem]">
            <p>8 Feb 2025</p>
            <a className="underline">Read more</a>
          </div>
        </div>
      </div>
      <div className="h-full w-full" style={{ padding: "1rem" }}>
        <div className="text-light-300 text-center" style={{ padding: "3rem" }}>
          <div className="leading-16">
            <h3 className="text-[5rem] font-editorial-italic">clean</h3>
            <h3 className="text-[3.8rem] uppercase font-ppmori-bold">
              Journal
            </h3>
          </div>
          <p
            className="w-full max-w-[24rem] text-[0.8rem]"
            style={{ margin: "auto" }}
          >
            Healty tips on skincare, regimen and overall a better lifestyle.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-[20rem]">
            <div className="w-full h-[10rem]">
              <img
                src="/images/login.jpg"
                className="h-full w-full aspect-square object-cover object-center"
              />
            </div>
            <div
              className="flex flex-col gap-5 bg-light-300"
              style={{ padding: "2rem" }}
            >
              <p className="text-[0.78rem] w-full max-w-[45rem] text-dark-200 ">
                Your Skincare and Makeup Routine Impacts Your Well-Being
              </p>
              <div className="flex items-center justify-between text-light-800 text-[0.7rem]">
                <p>20 Dec 2024</p>
                <a className="underline">Read more</a>
              </div>
            </div>
          </div>

          <div className="w-[20rem]">
            <div className="h-[10rem] w-full">
              <img
                src="/images/explore-1.jpg"
                className="h-full w-full  object-center object-cover aspect-square"
              />
            </div>
            <div
              className="flex flex-col gap-5 bg-light-300"
              style={{ padding: "2rem" }}
            >
              <p className="text-[0.78rem] w-full max-w-[45rem] text-dark-200 ">
                Your Skincare and Makeup Routine Impacts Your Well-Being
              </p>
              <div className="flex items-center justify-between text-light-800 text-[0.7rem]">
                <p>20 Dec 2024</p>
                <a className="underline">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
