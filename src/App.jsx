import React, { useEffect } from "react";
import { CustomEase, ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "../sections/Hero";

import Overlay from "../sections/Overlay";
import Details from "../sections/Details";
import CardSection from "../sections/CardSection";
import EchoText from "../sections/EchoText";
import Features from "../sections/Features";
import ReactLenis, { Lenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

const App = () => {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Details />
        <div
          className="bg-light-700 w-11/12 h-[1px]"
          style={{ margin: "auto" }}
        />
        <CardSection />
        <EchoText />
        <Features />
      </ReactLenis>
    </>
  );
};

export default App;
