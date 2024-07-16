import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HoverArrowBtn } from "./Buttons";
import SpaceDivider from "./SpaceDivider";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 pb-0 w-full font-syne"  >
      <div className="container bg-brand-pink rounded-t-[2rem]">
        <div className="show-case w-full min-h-[20rem] bg-brand-pink rounded-t-[2rem] px-8 py-10">
            <div className="flex  w-full items-start justify-between p-6 py-8">
                <h1 className="text-[48px] text-left font-bold w-[50%]" style={{lineHeight: 53 + "px"}}>
                See how we can help your business grow with digital solutions
                </h1>

                <div className="flex flex-col justify-end w-[25%] gap-6 items-end ">
                    <p className="font-sans text-right">
                    Ready to speak with a specialized expert? Give us a ring
                    </p>

                    <Link className="flex items-center" to="https://api.whatsapp.com/send?phone=923248226367&text=Hey,%20how%27s%20it%20going?%20well,%20i%20would%20like%20learn%20more%20about%20your%20solutions%20and%20how%20they%20could%20help%20my%20business%20grow?">
                        <FaWhatsapp className="text-xl"/>
                        <p className="text-xl font-semibold underline-dim-blue-on-hover" href="">+92 328226367</p> 
                    </Link>

                    <HoverArrowBtn text="get a free audit" link="get-proposal" />
                </div>

            </div>
            
        </div>

        <div class="elementor-spacer w-full flex justify-center">
            <SpaceDivider />
        </div>

        <div className="navigation w-full min-h-[20rem] bg-light-grey rounded-t-[2rem]"></div>
      </div>
    </footer>
  );
};

export default Footer;
