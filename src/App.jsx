import React, { useEffect } from "react";
import { CustomEase, ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "../sections/Hero";
import Lenis from "lenis";
import Overlay from "../sections/Overlay";
import Details from "../sections/Details";
import CardSection from "../sections/CardSection";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Hero />
      <Details />
      <div
        className="bg-light-700 w-11/12 h-[1px]"
        style={{ margin: "auto" }}
      />
      <CardSection />
    </>
  );
};

export default App;
