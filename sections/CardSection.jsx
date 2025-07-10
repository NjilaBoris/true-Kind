import React, { useEffect } from "react";
import Button from "../components/Button";
import { productsData1 } from "../constant";
import Card from "../components/Card";
import TextReveal from "../components/TextReveal";
import MagneticButton from "../components/MagneticButton";
import { motion } from "motion/react";

const CardSection = () => {
  return (
    <div className="h-[300vh] w-full">
      <div
        style={{ margin: "10px auto", paddingTop: "8rem" }}
        className=" flex flex-col justify-center items-center font-bold text-[3.50rem] text-dark-200"
      >
        <TextReveal>
          <div className="leading-15 text-center">
            <h3 className="uppercase ">Explore</h3>
            <h3 className="font-editorial-light text-[4rem]">pure potency</h3>
          </div>
        </TextReveal>
      </div>
      <div className="flex" style={{ paddingTop: "3rem" }}>
        <div className="w-full h-1/2 aspect-square">
          <img
            src="/images/explore-1.jpg "
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="w-full h-full" style={{ padding: "5rem 0 0 0" }}>
          <div
            className="flex justify-between items-center"
            style={{ padding: "0 3rem 0 3rem" }}
          >
            <div className="text-[2.85rem] text-dark-200 leading-12">
              <TextReveal>
                <h3>Pure</h3>
                <h3 className="font-editorial-italic">Brilliance</h3>
              </TextReveal>
            </div>
            <MagneticButton>
              <Button icon={`/icons/arrow-right.svg`} />
            </MagneticButton>
          </div>
          <motion.div
            whileInView="visible"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                },
              },
              hidden: {
                opacity: 0,
                x: -30,
                transition: {
                  duration: 0.8,
                },
              },
            }}
            initial="hidden"
            animate="hidden"
            viewport={{
              amount: 1,
              once: true,
            }}
            className="relative"
            style={{ padding: "3rem 0 0 2rem" }}
          >
            <div className="w-full  text-[11.3833px]  flex justify-center items-center  gap-[1rem]">
              {productsData1.map((product) => (
                <Card key={product.image} {...product} />
              ))}
            </div>
            <TextReveal>
              <p
                className="uppercase leading-3 text-[11.3833px] text-dark-200"
                style={{ paddingTop: "3rem" }}
              >
                Stay glowing and healthy without <br /> having to think about
                it.
              </p>
            </TextReveal>
          </motion.div>
        </div>
      </div>

      <div className="flex">
        <div className="w-full h-full" style={{ padding: "5rem 0 0 0" }}>
          <div
            className="flex justify-between items-center"
            style={{ padding: "0rem 6rem 0 4rem" }}
          >
            <div className="text-[2.85rem] text-dark-200 leading-12">
              <TextReveal>
                <h3>Varnaya</h3>
                <h3 className="font-editorial-italic">Blends</h3>
              </TextReveal>
            </div>
            <MagneticButton>
              <Button icon={`/icons/arrow-right.svg`} />
            </MagneticButton>
          </div>
          <motion.div
            whileInView="visible"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                },
              },
              hidden: {
                opacity: 0,
                x: 30,
                transition: {
                  duration: 0.8,
                },
              },
            }}
            initial="hidden"
            animate="hidden"
            viewport={{
              amount: 1,
              once: true,
            }}
            className="relative"
            style={{ padding: "3rem 1rem 0 0" }}
          >
            <div className="w-full  text-[11.3833px]  flex justify-center items-center  gap-[1rem]">
              {productsData1.map((product) => (
                <Card
                  key={product.image}
                  {...product}
                  className="!bg-[#D8D0C4]"
                />
              ))}
            </div>
            <TextReveal>
              <p
                className="uppercase leading-3 text-[11.3833px] text-dark-200"
                style={{ padding: "3rem 0 0 2rem" }}
              >
                Stay glowing and healthy without <br /> having to think about
                it.
              </p>
            </TextReveal>
          </motion.div>
        </div>
        <div className="w-full h-1/2 aspect-square">
          <img
            src="/images/explore-2.jpg "
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
