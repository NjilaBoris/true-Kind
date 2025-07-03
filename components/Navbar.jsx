import React from "react";
import { BiShoppingBag, BiUser } from "react-icons/bi";

const Navbar = () => {
  const navLinks = ["shop", "philosophy", "gallery", "journal"];

  return (
    <div className="relative  w-full z-20" style={{ padding: "0.5rem 2rem" }}>
      <nav className="flex justify-between items-center">
        <p className="font-editorial-regular text-[1.2rem] text-light-300">
          true.kind.
        </p>
        <ul className="flex text-light-400 font-semibold justify-center gap-10 items-center uppercase text-[0.6rem]">
          {navLinks.map((link, index) => (
            <li key={index} className="cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
        <div
          className="flex justify-center items-center gap-3 bg-white rounded-4xl p-6"
          style={{ padding: "0.8rem 1.5rem" }}
        >
          <BiShoppingBag className="text-[1.5rem] text-light-900" />
          <div className="h-5 w-[0.5px] bg-light-900" />
          <BiUser className="text-[1.5rem] text-light-900" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
