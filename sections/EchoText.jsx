import React from "react";
import MagneticButton from "../components/MagneticButton";
import Button from "../components/Button";

const EchoText = () => {
  return (
    <div className="h-[200vh] w-full bg-light-500 relative">
      <div className=" flex items-center justify-center z-10">
        <div className="text-dark-200 uppercase font-semibold absolute top-1/12 text-[8.54rem] text-center leading-32">
          <h3>Radical</h3>
          <h3>Transparency.</h3>
          <div className="font-editorial-light">
            <h3>Hide</h3>
          </div>
          <h3>Nothing.</h3>
        </div>
      </div>
      <div>
        <img
          src="/images/texture.png"
          className="z-20 absolute bottom-[5%] left-[6%] size-[36rem]"
        />
      </div>
      <div className="absolute flex flex-col bottom-0 gap-5.5 top-[55%] right-[18%]">
        <div>
          <h3 className="text-[0.9rem]">Highest Standards.</h3>
          <p className="max-w-[18rem] text-light-900 text-[0.8rem]">
            We formulate to the highest standards of efficacyand safety – using
            only proven, verifiedingredients in bio-compatible bases; and
            freefrom over 1800 questionable ingredients
          </p>
        </div>
        <div>
          <h3 className="text-[0.9rem]">Real Results.</h3>
          <p className="max-w-[18rem] text-light-900 text-[0.8rem]">
            Skin care packed with anti oxidants, skinreplenishing and skin
            restoring agents instable pH levels that don’t promise miracles,but
            deliver real results.
          </p>
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
