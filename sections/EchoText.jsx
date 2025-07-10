import React, { useRef } from "react";
import MagneticButton from "../components/MagneticButton";
import Button from "../components/Button";
import TextReveal from "../components/TextReveal";
import { motion, useScroll, useTransform } from "motion/react";

const EchoText = () => {
  const ref = useRef(null);
  const { scrollYProgress: translateY } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(translateY, [0, 1], [0, -500]);
  return (
    <div className="h-[200vh] w-full bg-light-500 relative">
      <div className=" flex items-center justify-center z-10">
        <div className="text-dark-200 uppercase font-semibold absolute top-1/12 text-[8.54rem] text-center leading-32">
          <TextReveal>
            <h3>Radical</h3>
          </TextReveal>
          <TextReveal>
            <h3>Transparency.</h3>
          </TextReveal>

          <div className="font-editorial-light">
            <TextReveal>
              <h3>Hide</h3>
            </TextReveal>
          </div>
          <TextReveal>
            <h3>Nothing.</h3>
          </TextReveal>
        </div>
      </div>
      <div>
        <motion.img
          style={{ y }}
          ref={ref}
          src="/images/texture.png"
          className="z-20 absolute bottom-[5%] left-[6%] size-[36rem]"
        />
      </div>
      <div className="absolute flex flex-col bottom-0 gap-5.5 top-[55%] right-[18%]">
        <div>
          <TextReveal>
            <h3 className="text-[0.9rem]">Highest Standards.</h3>
          </TextReveal>
          <TextReveal>
            <p className="max-w-[18rem] text-light-900 text-[0.8rem]">
              We formulate to the highest standards of efficacyand safety –
              using only proven, verifiedingredients in bio-compatible bases;
              and freefrom over 1800 questionable ingredients
            </p>
          </TextReveal>
        </div>
        <div>
          <TextReveal>
            <h3 className="text-[0.9rem]">Real Results.</h3>
          </TextReveal>
          <TextReveal>
            <p className="max-w-[18rem] text-light-900 text-[0.8rem]">
              Skin care packed with anti oxidants, skinreplenishing and skin
              restoring agents instable pH levels that don’t promise
              miracles,but deliver real results.
            </p>
          </TextReveal>
        </div>
      </div>
      <div
        className="flex justify-center items-center absolute left-[18%] top-[27%]"
        style={{ paddingTop: "1.8rem" }}
      >
        <MagneticButton>
          <div className="flex  items-center gap-2 cursor-pointer ">
            <Button
              icon="/icons/arrow-upright-white.svg"
              otherClasses="size-20 !bg-dark-200"
            />
            <a className="underline  uppercase text-[0.6rem]">
              Our <br /> philosophy
            </a>
          </div>
        </MagneticButton>
      </div>
    </div>
  );
};

export default EchoText;
