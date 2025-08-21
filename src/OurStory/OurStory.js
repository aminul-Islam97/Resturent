import React, { useState } from "react";
import "./OurStory.css";

import chefs1 from "../assets/chefs1.jpg";
import chefs2 from "../assets/food4.jpg";
import chefs3 from "../assets/food5.jpg";

import food1 from "../assets/food1.jpg";
import food2 from "../assets/food4.jpg";
import food3 from "../assets/food5.jpg";

const leftSlides = [chefs1, chefs2, chefs3];
const rightSlides = [food1, food2, food3];

const OurStory = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const handleNextLeft = () => {
    setLeftIndex((prev) => (prev + 1) % leftSlides.length);
  };

  const handleNextRight = () => {
    setRightIndex((prev) => (prev + 1) % rightSlides.length);
  };

  return (
    <section className="our-story">
      <div className="story-header">
        <h4>TASTY AND CRUNCHY</h4>
        <h2>OUR STORY</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div className="story-gallery">
       
        <div className="slider">
          <img
            src={leftSlides[leftIndex]}
            alt="Our Chefs"
            onClick={handleNextLeft} 
            style={{ cursor: "pointer" }}
          />
          <div className="dots">
            {leftSlides.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === leftIndex ? "active" : ""}`}
                onClick={() => setLeftIndex(i)}
              ></span>
            ))}
          </div>
        </div>
        <div className="slider">
          <img
            src={rightSlides[rightIndex]}
            alt="Our Food"
            onClick={handleNextRight} 
            style={{ cursor: "pointer" }}
          />
          <div className="dots">
            {rightSlides.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === rightIndex ? "active" : ""}`}
                onClick={() => setRightIndex(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className="signature">
        <h4>JENIFER LOPEZ</h4>
        <p className="sign">Jenifer Lopez</p>
      </div>
    </section>
  );
};

export default OurStory;
