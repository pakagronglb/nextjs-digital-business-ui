"use client";
import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const { scrollYProgress } = useScroll();
  const [navStyle, setNavStyle] = useState("");
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });
  return (
    <motion.div className={`n-wrapper ${navStyle}`}>
      <div className="container">
        {/* for desktop */}
        <div className="n-container">
          {/* left side log */}
          <div className="n-logo">
            <Link to="h-wrapper" spy={true} smooth={true}>
              <span>REDEFINE</span>
            </Link>
          </div>

          {/* righ side */}
          <div className="n-right">
            {/* menu */}
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>What we do</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth offset={100}>
                <span>How it works</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth>
                <span>Who we invest in </span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100}>
                <span>Testimonials</span>
              </Link>
            </div>

            {/* button */}
            <div className="fund-button">
              <span>Get Funded</span>
            </div>
          </div>
        </div>
      </div>
      {/* for mobile */}
      <div className="nm-container">
        <span>REDEFINE</span>

        {/* menu icons */}
        <div className="menu-icon">
          {!mobileMenuOpened ? (
            <BiMenuAltRight
              size={30}
              onClick={() => setMobileMenuOpened(true)}
            />
          ) : (
            <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
          )}
        </div>

        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwd-wrapper"
            spy={true}
            smooth={true}
          >
            <span>What we do</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="hiw-wrapper"
            spy
            smooth
            offset={100}
          >
            <span>How it works</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwi-wrapper"
            spy
            smooth
          >
            <span>Who we invest in </span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="t-wrapper"
            spy
            smooth
            offset={100}
          >
            <span>Testimonials</span>
          </Link>
          <div className="m-fund-button">Get Funded</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
