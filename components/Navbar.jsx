import React from "react";
import { BiShoppingBag, BiUser } from "react-icons/bi";

const Navbar = () => {
  const navLinks = ["shop", "philosophy", "gallery", "journal"];

  return (
    <nav
      className="flex justify-between items-center absolute top-0 w-full z-5"
      style={{ padding: "1.25em 1.5em" }}
    >
      <div className="logo">
        <p className="font-editorial-regular text-[1.2rem] text-light-300 cursor-pointer">
          true.kind.
        </p>
      </div>

      <ul className="nav-links flex text-light-400 font-semibold justify-center gap-10 items-center uppercase text-[0.6rem]">
        {navLinks.map((link, index) => (
          <a key={index} className="cursor-pointer">
            {link}
          </a>
        ))}
      </ul>
      <div
        className="flex justify-center items-center gap-3 bg-white rounded-[40px]
         p-6 cursor-pointer transition-all  hover:bg-[#e7e3e3]"
        style={{ padding: "0.8rem 1.5rem" }}
      >
        <BiShoppingBag className="text-[16px] text-light-900 w-[21px] h-[28px] " />
        <div className="h-4 w-[0.3px] bg-light-900" />
        <BiUser className="text-[16px] text-light-900 w-[21px] h-[28px]" />
      </div>
    </nav>
  );
};

export default Navbar;
