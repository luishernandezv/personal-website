import React from "react";
import { useState } from "react";
import MenuSVG from "../svgs/menu.svg";
import { scrollTo } from "../utils";

const NavigationBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <nav
      className={`${
        menuVisible ? "bg-secondary-light " : ""
      } flex items-center justify-between  text-secondary flex-wrap  px-5 py-4`}
    >
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className=" text-xl tracking-tight">LH</span>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setMenuVisible(!menuVisible)}
          className="flex items-center focus:outline-none"
        >
          <img
            src={MenuSVG}
            alt="Menu Img"
            className="w-8 h-8 text-secondary"
          />
        </button>
      </div>
      <div
        className={`${
          menuVisible ? "block" : "hidden"
        }  w-full block flex-grow md:flex md:items-center md:w-auto md:justify-end`}
      >
        <div className="text-sm md:ml-5">
          <button
            onClick={() => {
              setMenuVisible(false);
              setTimeout(() => scrollTo("#about"), 16);
            }}
            className="block mt-4 md:inline-block md:mt-0  mr-4"
          >
            About
          </button>
          <button
            onClick={() => {
              setMenuVisible(false);
              setTimeout(() => scrollTo("#work"), 16);
            }}
            className="block mt-4 md:inline-block md:mt-0  mr-4"
          >
            Work
          </button>
          <button
            onClick={() => {
              setMenuVisible(false);
              setTimeout(() => scrollTo("#contact"), 16);
            }}
            href="#contact"
            className="block mt-4 md:inline-block md:mt-0"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
