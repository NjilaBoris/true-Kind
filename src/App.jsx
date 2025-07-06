import React, { useEffect } from "react";
import { CustomEase, ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "../sections/Hero";
import Lenis from "lenis";
import Overlay from "../sections/Overlay";
import Details from "../sections/Details";

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
    </>
  );
};

export default App;
