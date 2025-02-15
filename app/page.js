"use client";
import Navbar from "@/src/components/Navbar/Navbar";
import { motion, useAnimation } from "framer-motion";
import "./page.css";
import Hero from "@/src/components/Hero/Hero";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import WhatWeDo from "@/src/components/WhatWeDo/WhatWeDo";
import OurDiff from "@/src/components/OurDiff/OurDiff";
import HowItWorks from "@/src/components/HowItWorks/HowItWorks";
import WhoWeInvest from "@/src/components/WhoWeInvest/WhoWeInvest";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import Footer from "@/src/components/Footer/Footer";
export default function Home() {
  const controls = useAnimation();

  return (
    <motion.div animate={controls} className="app">
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() => {
          controls.start({
            backgroundColor: "white",
          });
        }}
        viewport={{ amount: 0.4 }}
        className="dummy"
      >
        <OurDiff />
      </motion.div>

      <HowItWorks />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() => {
          controls.start({
            backgroundColor: "white",
          });
        }}
        viewport={{ amount: 0.4 }}
        className="dummy"
      >
        <WhoWeInvest />
      </motion.div>

      <Testimonials />
      <Footer />
    </motion.div>
  );
}
