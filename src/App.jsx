import React, { useEffect } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "../sections/Hero";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

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
      <div className="bg-red-50 h-screen w-full" />
    </>
  );
};

export default App;
