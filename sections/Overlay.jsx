import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import React, { useRef } from "react";

const Overlay = () => {
  const number = "0027658999";
  // Group digits into chunks of 2
  const groups = [];
  for (let i = 0; i < number.length; i += 2) {
    groups.push(number.slice(i, i + 2));
  }
  const countRef = useRef(null);

  useGSAP(() => {
    CustomEase.create("hop", "0.9, 0, 0.1, 1");
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
      onComplete: () => console.log("Animation sequence completed"),
    });
    const counts = gsap.utils.toArray(".count");
    counts.forEach((count, index) => {
      const digits = count.querySelectorAll(".digit h1");

      tl.to(
        digits,
        {
          y: "0%",
          duration: 1,
          stagger: 0.075,
        },
        index * 1
      );
      if (index < counts.length - 1) {
        tl.to(
          digits,
          {
            y: "-100%",
            duration: 1,
            stagger: 0.075,
          },
          index * 1 + 1
        );
      } else {
        tl.to(
          digits,
          {
            y: "-100%",
            duration: 1,
            stagger: 0.075,
            delay: 0.5,
          },
          index * 1 + 1
        );
      }
    });
    tl.to("#spinner", {
      opacity: 0,
      duration: 0.3,
    });
    tl.to(
      ".wordHead h1",
      {
        y: "0%",
        duration: 1,
      },
      "<"
    );
    tl.to(".divider", {
      scaleY: "100%",
      duration: 1,
      onComplete: () => {
        gsap.to(".divider", {
          opacity: 0,
          duration: 0.4,
          delay: 0.3,
        });
      },
    });
    tl.to("#word-1 h1", {
      y: "100%",
      duration: 1,
      opacity: 0,
      delay: 0.3,
    });

    tl.to(
      "#word-2 h1",
      {
        y: "-100%",
        opacity: 0,
        duration: 1,
      },
      "<"
    );
    tl.to(".block", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      stagger: 0.1,
      delay: 0.75,
      onStart: () => {
        console.log("Starting hero image scale");
        gsap.to("#container", {
          opacity: 0,
          duration: 0.5,
          delay: 0.8,
          display: "none",
        });
        gsap.to(".hero-img", {
          scale: 1,
          duration: 2,
          ease: "hop",
          delay: 0.2,
        });
      },
    });
    tl.to(
      [".logo a", ".nav-links a"],
      {
        y: "0%",
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
      },
      "<0.2"
    );

    tl.to(
      [".line h1", ".line p"],
      {
        y: "0%",
        duration: 1.5,
        stagger: 0.2,
      },
      "<"
    );

    tl.to(
      ".cta",
      {
        scale: 1,
        duration: 1.5,
        delay: 0.75,
      },
      "<"
    );

    tl.to(
      ".cta-icon",
      {
        scale: 1,
        duration: 1.5,
      },
      "<0.2"
    );

    tl.to(
      ".cta-lable p",
      {
        y: "0%",
        duration: 1.5,
      },
      "<0.1"
    );
  });
  return (
    <div
      className="w-full fixed top-0 right-0 z-100 h-dvh bg-dark-100 text-white"
      id="container"
    >
      <div className="absolute top-0 w-full h-full flex">
        <div className="block w-full h-full bg-[#303030]"></div>
        <div className="block w-full h-full bg-[#303030]"></div>
      </div>
      <div className="absolute top-[40%] left-2/5 flex gap-[0.2rem] translate-1/2">
        <div
          className="wordHead words text-[2rem] pr-[0.8rem] relative  -left-[0.5rem] "
          id="word-1"
        >
          <h1 className="font-editorial-italic">
            <span>Kind</span>
          </h1>
        </div>
        <div className="wordHead words text-[2rem]" id="word-2">
          <h1>Root</h1>
        </div>
      </div>

      <div
        className="absolute top-0 left-[50.1%] origin-[center_-50%]
       w-[1px] h-full bg-white divider"
      ></div>

      <div className="absolute bottom-[10%] left-[50.4%] -translate-x-1/2 overflow-hidden">
        <div
          id="spinner"
          className="size-[50px] border-[1.4px] border-solid
         border-[#fff] rounded-[50%] border-t-[#ffffff20] animate-spin"
        />
      </div>
      <div
        className="absolute  z-2 top-1/2 left-1/2 -translate-1/2"
        ref={countRef}
      >
        {groups.map((group, groupIndex) => (
          <div
            className="count z-3 top-1/2 left-1/2 -translate-1/2 absolute  flex"
            key={groupIndex}
          >
            {group.split("").map((digit, digitIndex) => (
              <div className="digit flex-1 pt-[1rem] " key={digitIndex}>
                <h1 className="text-[10rem] font-[400]">{digit}</h1>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overlay;
