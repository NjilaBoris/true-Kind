import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "../sections/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <>
      <Hero />
      <div className="bg-red-50 h-screen w-full" />
    </>
  );
};

export default App;
