import React from "react";
import Button from "../components/Button";
import MagneticButton from "../components/MagneticButton";
import TextReveal from "../components/TextReveal";

const Features = () => {
  return (
    <div
      className="bg-dark-200 h-[120vh] w-full flex items-center"
      style={{ padding: "3rem" }}
    >
      <div className=" w-full bg-light-300">
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
            <TextReveal>
              <h3 className="text-[5rem] font-editorial-italic">clean</h3>
            </TextReveal>
            <TextReveal>
              <h3 className="text-[3.8rem] uppercase font-ppmori-bold">
                Journal
              </h3>
            </TextReveal>
          </div>
          <TextReveal>
            <p
              className="w-full max-w-[24rem] text-[0.8rem]"
              style={{ margin: "auto" }}
            >
              Healty tips on skincare, regimen and overall a better lifestyle.
            </p>
          </TextReveal>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-[20rem]">
            <div className="w-full h-[10rem] overflow-hidden">
              <img
                src="/images/login.jpg"
                className="h-full w-full aspect-square object-cover transition-all
                 hover:scale-[1] object-center scale-[1.2] cursor-pointer"
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
            <div className="h-[10rem] w-full overflow-hidden">
              <img
                src="/images/shop-hero-m.jpg"
                className="h-full w-full   object-cover aspect-square transition-all
                 hover:scale-[1] object-center scale-[1.2] cursor-pointer"
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
        <div
          className="flex justify-center items-center"
          style={{ paddingTop: "1.8rem" }}
        >
          <MagneticButton>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
              <Button
                icon="/icons/arrow-right-dark.svg"
                otherClasses="size-15 bg-light-300"
              />
              <a className="underline text-light-500 uppercase text-[0.6rem] will-change-transform">
                See all
              </a>
            </div>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

export default Features;
