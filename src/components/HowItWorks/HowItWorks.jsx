import React from "react";
import "./HowItWorks.css";
import { hitFeatures } from "../../utils/data";
import { motion } from "framer-motion";
import { tagVaraints, titleVaraints } from "../../utils/animation";
import Image from "next/image";
const HowItWorks = () => {
  const featureVariants = {
    offscreen: {
      scale: 0.5
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  return (
    <div className="hiw-wrapper">
      <div className="container">
        <div className="hiw-container">
          {/* head */}
          <div className="hiw-head">
            <motion.span
              variants={tagVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
            >
              How it works
            </motion.span>
            <motion.span
              variants={titleVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
            >
              Unlocking potential along the growth journey
            </motion.span>
          </div>

          {/* features */}
          <div className="hiw-features">
            {hitFeatures.map((feature, i) => (
              <motion.div
                variants={featureVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="hiw-feature"
                key={i}
              >


                {/* left side detail */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition:{
                      type: "easeIn",
                      duration: 1,
                      delay: .7
                    }
                  }}
                  className="detail"
                >
                  <span className="des">0{i + 1}</span>
                  <span className="sec-title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
                  

                {/* right side icon */}
                <div className="icon">
                  <Image src={feature.icon} alt="icon" width={128} height={128} style={{translate: "50% 0rem"}}/>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
