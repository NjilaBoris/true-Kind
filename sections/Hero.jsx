import React from "react";
import Navbar from "../components/Navbar";
import { BiArrowToLeft } from "react-icons/bi";
import "@polymer/iron-icons/iron-icons.js";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Overlay from "./Overlay";
import Button from "../components/Button";

const Hero = () => {
  useGSAP(() => {
    let headingSplit = SplitText.create("#heading", {
      type: "words",
      wordsClass: "word++",
    });
    console.log(headingSplit);
  }, []);
  return (
    <>
      <div className="relative w-full h-dvh overflow-hidden">
        <Overlay />
        <div
          className="absolute w-full hero-img -z-2 top-0 left-0 h-screen overflow-hidden"
          style={{
            scale: 1.4,
            willChange: "transform",
          }}
        >
          <video
            src="/video/default (3).mp4"
            muted
            loop
            autoPlay
            className="w-full h-full object-cover object-center"
          />
        </div>
        <Navbar />
        <div
          className="flex w-full justify-between h-full items-center text-center gap-[1.5em]  flex-col z-20 "
          style={{ paddingTop: "23svh" }}
        >
          <div className="text-center flex flex-col gap-2 line">
            <h1
              id="heading"
              className="text-[4.62rem]  leading-5  overflow-hidden text-light-400"
            >
              True to Oneself
              <br /> kind to Nature
            </h1>
            <div className="line">
              <p className="text-[0.7rem] text-light-300">
                Unreservedly honest products that truly work, be <br /> kind to
                skin and the planet – no exceptions!
              </p>
            </div>
          </div>

          <div
            className="cta bg-light-500 relative w-1/2 bottom-3.5 flex justify-center items-center rounded-[5rem] will-change-transform "
            style={{
              padding: "1.2rem 1.2rem",
            }}
          >
            <div className="cta-lable">
              <p
                className="text-[0.71rem]  text-[#3B3B3B] uppercase underline
           absolute top-1/2 left-1/2 -translate-1/2 "
              >
                Explore All Products
              </p>
            </div>

            <div
              className="cta-icon  absolute right-5 p-10  will-change-transform"
              style={{ padding: "1rem" }}
            >
              <Button icon={`/icons/arrow-right.svg`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
