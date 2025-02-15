import React from "react";
import "./WhatWeDo.css";
import { features } from "../../../src/utils/data";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVaraints,
  titleVaraints,
} from "../../../src/utils/animation";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* top heading */}
          <div className="wwd-head">
            <motion.span
              variants={tagVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
            >
              What we do
            </motion.span>
            <motion.span
              variants={titleVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
            >
              Empowering founders with non dilutive capital and execution
              expertise
            </motion.span>
            <motion.span
              variants={desVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className="des"
            >
              Here is how we can evaluate
            </motion.span>
          </div>

          {/* two containers */}

          {/* first block */}
          <div className="wwd-blocks">
            <div className="wwd-block">
              <motion.span
                variants={titleVaraints}
                initial="offscreen"
                whileInView={"onscreen"}
                className="sec-title"
              >
                Blue Advances
              </motion.span>
              <motion.span
                variants={desVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="text"
              >
                Fund recurring growth expenses e.g. customer acquisition,
                inventory
              </motion.span>

              <div className="block-features">
                {features.slice(0, 3).map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={containerVariants((i + 1) * 0.1)}
                    initial="offscreen"
                    whileInView="onscreen"
                    className="block-feature"
                  >
                    <Image src={feature.icon} alt="feature" width={60} height={60}/>
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* second block */}
            <div className="wwd-block">
              <motion.span
                variants={titleVaraints}
                initial="offscreen"
                whileInView={"onscreen"}
                className="sec-title"
              >
                Blue Seed
              </motion.span>
              <motion.span
                variants={desVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="text"
              >
                Fund one-offs to scale e.g. product, hiring
              </motion.span>
              <div className="block-features">
                {features.slice(3, 6).map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={containerVariants((i + 1) * 0.1)}
                    initial="offscreen"
                    whileInView="onscreen"
                    className="block-feature"
                  >
                    <Image src={feature.icon} alt="feature" width={60} height={60}/>
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={containerVariants(0.3)}
          className="wwd-support"
        >
          <div>
            <span className="sec-title">Blue Growth Support</span>
            <span className="des">
              Data Insights and full stack expertise to supercharge growth
            </span>
          </div>

          <div>
            <span className="text">
              Actionable data insights by connecting revenue, marketing and
              social media platforms
            </span>
            <span className="text">
              On demand execution expertise at cost or revenue share across
              proposition design, engineering, marketing analytics,
              partnerships, brand, intellectual property, market expansion,
              talent management
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
