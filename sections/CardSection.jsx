import React from "react";
import Button from "../components/Button";
import { productsData1 } from "../constant";
import Card from "../components/Card";

const CardSection = () => {
  return (
    <div className="h-[200vh] w-full">
      <div
        style={{ margin: "10px auto", paddingTop: "8rem" }}
        className=" flex flex-col justify-center items-center font-bold text-[3.50rem] text-dark-200"
      >
        <h3 className="uppercase leading-1.5">Explore</h3>
        <h3 className="font-editorial-light text-[4rem]">pure potency</h3>
      </div>
      <div className="flex" style={{ paddingTop: "3rem" }}>
        <div className="w-full h-1/2 aspect-square">
          <img
            src="/images/explore-1.jpg "
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="w-full h-full" style={{ margin: "5rem 0 0 4rem" }}>
          <div
            className="flex justify-between items-center"
            style={{ paddingRight: "6rem" }}
          >
            <div className="text-[2.85rem] text-dark-200 leading-12">
              <h3>Pure</h3>
              <h3 className="font-editorial-italic">Brilliance</h3>
            </div>
            <Button icon={`/icons/arrow-right.svg`} />
          </div>
          <div className="relative" style={{ paddingTop: "3rem" }}>
            <div className="w-full  text-[11.3833px]  flex justify-center items-center  gap-[1rem]">
              {productsData1.map((product) => (
                <Card key={product.image} {...product} />
              ))}
            </div>
            <p
              className="uppercase leading-3 text-[11.3833px] text-dark-200"
              style={{ paddingTop: "3rem" }}
            >
              Stay glowing and healthy without <br /> having to think about it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
