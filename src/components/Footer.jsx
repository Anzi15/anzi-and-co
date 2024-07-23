import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HoverArrowBtn } from "./Buttons";
import SpaceDivider from "./SpaceDivider";
import { Link } from "react-router-dom";
import googlePartners from "../assets/partner-logos/google-partners.webp";
import metaPartners from "../assets/partner-logos/meta-partners.png";
import googleCloud from "../assets/partner-logos/google-cloud.png";
import shopifyPartners from "../assets/partner-logos/shopify-partner.png";
import tiktokPartner from "../assets/partner-logos/tiktok-partner.png";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="lg:p-4 pb-0 w-full font-syne flex justify-center ">
      <div className=" bg-brand-pink rounded-t-[2rem] lg:w-[96%] w-full">
        <div className="show-case w-full min-h-[20rem] bg-brand-pink rounded-t-[2rem] px-12 py-10">
          <div className="flex w-full items-start justify-between md:p-6 md:py-8 md:flex-row flex-col">
            <h1 className="lg:text-[48px] text-[35px] tracking-tighter md:text-left font-bold md:w-[50%] w-full leading-9">
              See how we can help your business grow with digital solutions
            </h1>

            <div className="flex flex-col justify-end lg:w-[25%] md:w-[35%] w-full md:gap-6 gap-4 py-7 md:items-end items-center ">
              <p className="font-sans md:text-right">
                Ready to speak with a specialized expert? Give us a ring
              </p>

              <Link
                className="flex items-center"
                target="_blank"
                to="https://api.whatsapp.com/send?phone=923248226367&text=Hey,%20how%27s%20it%20going?%20well,%20i%20would%20like%20learn%20more%20about%20your%20solutions%20and%20how%20they%20could%20help%20my%20business%20grow?"
              >
                <FaWhatsapp className="text-xl" />
                <p className="text-xl font-semibold underline-dim-blue-on-hover">
                  +92 328226367
                </p>
              </Link>

              <HoverArrowBtn text="get a free audit" link="get-proposal" />
            </div>
          </div>
          <div className="elementor-spacer w-full flex justify-center">
            <SpaceDivider />
          </div>

          <div className="flex w-full justify-between lg:flex-row flex-col">
            <div className="py-4 hidden md:flex flex-col">
              <h3 className="font-bold lg:w-fit w-full lg:text-left text-center">
                A PARTNER, NOT A VENDOR
              </h3>

              <div className="brand-imgs flex py-4 gap-6 w-full lg:w-fit justify-between">
                <img
                  src={googleCloud}
                  alt=""
                  loading="lazy"
                  className="max-h-8"
                />
                <img
                  src={metaPartners}
                  alt=""
                  loading="lazy"
                  className="max-h-8"
                />
                <img
                  src={googlePartners}
                  alt=""
                  loading="lazy"
                  className="max-h-8"
                />
                <img
                  src={shopifyPartners}
                  alt=""
                  loading="lazy"
                  className="max-h-8"
                />
                <img
                  src={tiktokPartner}
                  alt=""
                  loading="lazy"
                  className="max-h-8"
                />
              </div>
            </div>
            <div className="flex w-full"></div>
            <div className="flex flex-col items-center lg:w-fit w-full justify-center">
              <div className="flex items-end h-fit w">
                <h3 className="text-[2.5rem] font-bold">6.7</h3> / Average ROAS
              </div>
              <p className="md:text-right text-[#46444C]">
                across our 33+ Global Clients on SEO, PPC & Social
              </p>
            </div>
          </div>
        </div>

        <div className="navigation w-full min-h-[20rem] bg-light-grey rounded-t-[2rem] px-12 py-14 ">
          <div className="w-full">
            <h4 className="text-left font-bold w-full pb-5">SOLUTIONS</h4>

            <div className="w-full pb-3 grid  gap-2 md:grid-cols-4">
              <div className="flex justify-start">
                <Link
                  to="/solutions/ui-ux-design/"
                  className="underline-dark-blue-on-hover text-[0.9rem] h-fit"
                >
                  UI/UX Design
                </Link>
              </div>
              <div className="flex justify-start">
                <Link
                  to="/solutions/web-development/"
                  className="underline-dark-blue-on-hover text-[0.9rem] h-fit"
                >
                  Web Development
                </Link>
              </div>
              <div className="flex justify-start">
                <Link
                  to="/solutions/social-media-marketing/"
                  className="underline-dark-blue-on-hover text-[0.9rem] h-fit"
                >
                  Social Media Marketing
                </Link>
              </div>
              <div className="flex justify-start">
                <Link
                  to="/solutions/search-engine-optimization/"
                  className="underline-dark-blue-on-hover text-[0.9rem] h-fit w-fit"
                >
                  Search Engine Optimization
                </Link>
              </div>
            </div>

            <div className="w-full justify-between grid md:grid-cols-4 gap-2">
              <div className="flex justify-start">
                <Link
                  to="/solutions/brand-guideline/"
                  className="underline-dark-blue-on-hover text-[0.9rem] h-fit"
                >
                  Brand Guideline
                </Link>
              </div>
              <div className="flex justify-start">
                <Link
                  to="/solutions/mobile-development/"
                  className="underline-dark-blue-on-hover text-[0.9rem] h-fit"
                >
                  Mobile App Development
                </Link>
              </div>
              <div className="flex justify-start">
                <Link
                  to="/solutions/google-my-business/"
                  className="underline-dark-blue-on-hover text-[0.9rem] h-fit"
                >
                  Google Business Profile
                </Link>
              </div>
              <div className="flex justify-start">
                <Link
                  to="/solutions/conversion-rate-optimization/"
                  className="underline-dark-blue-on-hover text-[0.9rem] h-fit"
                >
                  Conversion Rate Optimization
                </Link>
              </div>
            </div>
          </div>

          <div className="my-8 ">
            <hr />
            <div className="py-8 md:px-4 w-full flex justify-between  flex-col md:flex-row">
              <div className="w-full md:w-[42.1666666667%]  flex justify-between">

                <Link className="underline-dark-blue-on-hover " to="/about-us">
                  About
                </Link>
                <Link className="underline-dark-blue-on-hover " to="/blog">
                  Blog
                </Link>
                <Link className="underline-dark-blue-on-hover " to="/careers">
                  Careers
                </Link>
              </div>

              <div className="w-full md:w-[42.1666666667%] flex justify-between">
                <Link
                  className="underline-dark-blue-on-hover"
                  to="/meet-the-team"
                >
                  Team
                </Link>
                <Link
                  className="underline-dark-blue-on-hover"
                  to="/success-stories"
                >
                  Success Stories
                </Link>
                <Link className="underline-dark-blue-on-hover" 
                to="/reviews">
                  Reviews
                </Link>
              </div>
            </div>
            <hr />
          </div>
          <div className="pt-2 w-full flex justify-between flex-col-reverse md:flex-row gap-4 md:gap-0">
            <p>© 
              <span>
                {(new Date().getFullYear())}
              </span> Anzi &. CO</p>

            <div className="flex gap-4">
              <Link className="hover:text-dark-blue hover:scale-105 transition-all duration-75" to="/terms">Terms & Conditions</Link>
              <Link className="hover:text-dark-blue hover:scale-105 transition-all duration-75" to="/privacy">Privacy Policy</Link>
              <Link className="hover:text-dark-blue hover:scale-105 transition-all duration-75" to="/refund">Refund Policy</Link>
            </div>

            <div className="flex text-[1.5rem] justify-center gap-4 md:justify-normal">
              <Link className="hover:text-dark-blue hover:scale-105 transition-all duration-75" to="https://www.instagram.com/anziandco/" target="_blank">
                <FaInstagram />
              </Link>
              <Link className="hover:text-dark-blue hover:scale-105 transition-all duration-75" to="https://x.com/anziandco" target="_blank">
                <FaSquareXTwitter />
              </Link>
              <Link className="hover:text-dark-blue hover:scale-105 transition-all duration-75">
                <FaFacebook />
              </Link>
              <Link className="hover:text-dark-blue hover:scale-105 transition-all duration-75" to="https://linkedin.com/company/anziandco/" target="_blank">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
