import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import productsDetails from "../constant";
import MagneticButton from "../components/MagneticButton";
import Button from "../components/Button";
import TextReveal from "../components/TextReveal";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const Details = () => {
  const imageLeafref = useRef(null);
  const imageIngredientRef = useRef(null);
  const cardRef = useRef(null);
  const { scrollYProgress: translateY } = useScroll({
    target: imageLeafref,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: yImage } = useScroll({
    target: imageIngredientRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: cardTranslate } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(translateY, [0, 1], [0, -300]);
  const translateImage = useTransform(yImage, [0, 1], [0, -300]);
  const cardY = useTransform(cardTranslate, [0, 1], [0, -300]);
  return (
    <div className="h-[190vh] relative w-full">
      <div className="" style={{ padding: "5rem" }}>
        <TextReveal>
          <h1 className="text-[3.20rem] uppercase font-extrabold text-dark-300 leading-15">
            Clean, Conscious, <br /> Performance
          </h1>
        </TextReveal>

        <div
          className="flex  items-center gap-[3rem]"
          style={{ marginTop: "0.2rem" }}
        >
          <TextReveal>
            <p className="text-[0.75rem]">
              Unreservedly honest products that truly work, be <br /> kind to
              skin and the planet – no exceptions!
            </p>
          </TextReveal>

          <TextReveal>
            <h2 className="text-[4.48rem] text-dark-300 font-editorial-italic scale-[1.2] ">
              skincare.
            </h2>
          </TextReveal>
        </div>
      </div>
      <div className="absolute right-[20%] top-[30%] imgLeaf">
        <motion.img
          style={{ y }}
          src="/images/leaf.png"
          className="object-cover size-[15rem]"
          ref={imageLeafref}
        />
      </div>
      <div className="h-screen w-full mask">
        <img
          src="/images/ingredients-clip.jpg"
          className="h-full w-full object-cover object-center aspect-video "
        />
      </div>
      <div>
        {productsDetails.map(({ icon, name, details }) => (
          <motion.div
            ref={cardRef}
            style={{ y: cardY }}
            key={name}
            className=" flex gap-2 absolute nth-of-type-1:top-[35%]  nth-of-type-2:top-[45%]
             nth-of-type-3:right-[6%] nth-of-type-3:top-[45%] nth-of-type-4:right-[25%]
              nth-of-type-4:top-[55%] nth-of-type-1:left-[20%] nth-of-type-2:left-[2%] scale-[0.9]"
          >
            <div
              className="containerImg  w-[15rem] bg-[#F5F5F5] text-center rounded-2xl flex flex-col 
            items-center gap-[2rem] "
              key={name}
              style={{
                padding: "45.5333px 28.4583px 34.15px",
              }}
            >
              <div
                className="bg-[#fff]  flex justify-center items-center size-[5rem] rounded-full "
                style={{ padding: "1rem" }}
              >
                <img src={icon} className="size-[2rem]" />
              </div>
              <div className="text-[13.66px] font-normal">
                <h2 className="max-w-[6rem] leading-4">{name}</h2>
              </div>
              <div className="text-[11.3833px]">
                <p className="leading-4">{details}</p>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="absolute left-[25%] top-[68%]">
          <motion.img
            src="/images/empress.png"
            ref={imageIngredientRef}
            style={{
              y: translateImage,
            }}
          />
        </div>
      </div>
      <div
        className="flex justify-center items-center"
        style={{ paddingTop: "1.8rem" }}
      >
        <MagneticButton>
          <div className="flex  items-center gap-2 cursor-pointer">
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

export default Details;
