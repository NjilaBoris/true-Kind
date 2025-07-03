import React from "react";
import Navbar from "../components/Navbar";
import { BiArrowToLeft } from "react-icons/bi";
import "@polymer/iron-icons/iron-icons.js";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    let headingSplit = SplitText.create("#heading", {
      type: "words",
      wordsClass: "word++",
    });
    console.log(headingSplit);
  }, []);
  return (
    <div className="relative w-full h-dvh overflow-hidden">
      <Navbar />
      <video
        src="/public/video/default (3).mp4"
        muted
        loop
        autoPlay
        className="absolute -z-2 top-0 left-0  w-[100vw] object-cover object-center"
      />
      <div className="flex justify-around h-[90%] items-center flex-col z-20 ">
        <div className="text-center flex flex-col gap-2">
          <h1
            id="heading"
            className="text-[4.62rem]  leading-12  overflow-hidden text-light-400"
          >
            True to Oneself
            <br /> kind to Nature
          </h1>
          <p className="text-[0.7rem] text-light-300">
            Unreservedly honest products that truly work, be <br /> kind to skin
            and the planet – no exceptions!
          </p>
        </div>

        <div
          className="bg-light-500 relative w-1/2 rounded-full flex justify-center items-center"
          style={{
            padding: "1.2rem 1.2rem",
          }}
        >
          <p className="text-[0.8rem] uppercase underline">
            Explore All Products
          </p>
          <div
            className="bg-dark-100 absolute right-5 p-10 overflow-hidden rounded-[50%]"
            style={{ padding: "1rem" }}
          >
            <svg
              className="h-[0.92rem] w-[0.92rem] text-[1.5rem] text-center"
              class="icon-arrow"
              width="7"
              height="5"
              viewBox="0 0 13 8"
              stroke="white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-1e53e120=""
            >
              <path
                d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
