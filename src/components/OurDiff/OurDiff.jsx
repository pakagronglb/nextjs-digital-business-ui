import React from "react";
import "./OurDiff.css";
import { ourDiffFeatures } from "../../utils/data";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVaraints,
  titleVaraints,
} from "../../utils/animation";
import Image from "next/image";
const OurDiff = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          <div className="od-head">
            <motion.span
              variants={tagVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
            >
              Our difference
            </motion.span>
            <motion.span
              variants={titleVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
            >
              Fair capital, hassle free
            </motion.span>
            <motion.span
              variants={desVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className="text"
            >
              Our mission is to level the playing field for early stage growth
              capital.
              <br /> We provide capital that is unbiased, flexible and non
              dilutive with the execution support to accelerate value creation.
            </motion.span>
          </div>

          <div className="od-features">
            {ourDiffFeatures.map((feature, i) => (
              <motion.div
                key={i}
                variants={containerVariants((i + 1) * 0.1)}
                initial="offscreen"
                whileInView="onscreen"
                className="od-feature"
              >
                <Image src={feature.icon} alt="icon" width={128} height={128}/>
                <span className="sec-title">{feature.title}</span>
                <span className="text">{feature.des}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
