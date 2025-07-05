import React, { useEffect } from "react";
import { CustomEase, ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "../sections/Hero";
import Lenis from "lenis";
import Overlay from "../sections/Overlay";

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
    </>
  );
};

export default App;
