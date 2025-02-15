import React from "react";
import "./Testimonials.css";
import SlickSlider from "./Slider";

const Testimonials = () => {
  return (
    <>
      <div className="t-wrapper">
        <div className="container">
          <div className="t-container">
            <div className="t-head">
              <span className="tag">Testimonials</span>
              <span className="title">
                Access capital that complements traditional funding options
              </span>
              <div className="des">What people say about us</div>
            </div>
          </div>
          <SlickSlider />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
