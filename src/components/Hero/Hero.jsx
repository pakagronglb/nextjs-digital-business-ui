import React from "react";
import "./Hero.css";
import { LuMail } from "react-icons/lu";
import { HeroData } from "../../utils/data";
import { motion } from "framer-motion";
import EmailBox from "../EmailBox/EmailBox";
const Hero = () => {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2.5,
        damping: 25,
        delay,
      },
    },
  });

  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });

  return (
    <div className="h-wrapper">
      <div className="container">
      <img className="h-arrow" src="hero/hero-arrow.png" alt="arrow"/>
        {/* left section */}

        <div className="h-container">

          {/* left side */}
          <div className="h-left">
            <div className="image-row">
              {HeroData.slice(0, 3).map((person, i) => (
                <div className="person-pill" key={i}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    className="person-pill-bg"
                    style={{ backgroundColor: person.bg }}
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="image-row">
              {HeroData.slice(3, 6).map((person, i) => (
                <div className="person-pill" key={i}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    className="person-pill-bg"
                    style={{ backgroundColor: person.bg }}
                  >
                   <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* right side*/}
          <div className="h-right">
            <div className="h-title">
              <span>Redefine How</span>
              <span>You grow your</span>
              <span>Digital Business</span>
            </div>

            <div className="h-des">
              Revenue based funding and execution support designed for early
              stage founders
            </div>

            {/* email box */}
            <EmailBox/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
