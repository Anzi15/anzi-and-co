import React, { useState } from "react";
import logo from "../assets/logo.webp";
import { NavLink } from "react-router-dom";
import { HoverArrowBtn } from "./Buttons";
import { RxHamburgerMenu } from "react-icons/rx";
import ScrollDetector from '../modules/scrollDetector'

const Navbar = () => {
  const scrollDirection = ScrollDetector()
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  let navAnimatationClass; 
  if(scrollDirection == "down"){
    navAnimatationClass = "bg-white animate-slide-out"
  }else if(scrollDirection == "up"){
    navAnimatationClass = "bg-white animate-slide-in bg-white "
  }else if(scrollDirection == null){
    navAnimatationClass = "bg-[transparent]"
  }
  
  return (
    <nav className={`duration-500 flex fixed w-screen top-0 items-center  px-6 justify-between min-h-[4rem]  ${navAnimatationClass }`}>
      <img
        src={logo}
        alt="Logo"
        className="h-[5rem] select-none min-w-[234px]"
        draggable="false"
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      />

      <div
        className={`nav-action transition-all flex p-4 py-8 duration-700 ease-in-out ${
          isNavbarOpen ? "max-h-screen opacity-100" : "max-h-0 lg:h-fit opacity-[0] lg:opacity-100 lg:max-h-fit"
        } gap-6 lg:gap-0 lg:py-0 rounded-b-3xl lg:flex lg:static absolute top-0 w-screen left-0 lg:p-0 lg:bg-transparent items-center flex-col lg:flex-row lg:w-[65%] lg:justify-between justify-center bg-white z-10 overflow-hidden`}
      >
        {/* nav links */}
        <div className="navlinks min-h-full none flex items-center font-syne gap-4 flex-col lg:flex-row">
          <NavLink
            to="/solutions"
            className="uppercase font-600 underline-dark-blue-on-hover"
          >
            Solutions
          </NavLink>
          <NavLink
            to="/about-us"
            className="uppercase font-600 underline-dark-blue-on-hover"
          >
            Who are we
          </NavLink>
          <NavLink
            to="/success-stories"
            className="uppercase font-600 underline-dark-blue-on-hover"
          >
            Work
          </NavLink>
          <NavLink
            to="/contact"
            className="uppercase font-600 underline-dark-blue-on-hover"
          >
            Contact
          </NavLink>
        </div>
        <HoverArrowBtn link="/get-proposal" text="FREE AUDIT" />
      </div>

      <button
        className="nav-toggler lg:hidden flex h-full z-20"
        onClick={() => {
          setIsNavbarOpen(!isNavbarOpen);
        }}
      >
        <RxHamburgerMenu className="text-2xl" />
      </button>
    </nav>
  );
};

export default Navbar;
