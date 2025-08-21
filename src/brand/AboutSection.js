import React from "react";
import PhotoSlider from "./PhotoSlider";

import food1 from "../assets/food4.jpg";
import food2 from "../assets/food4.jpg";
import food3 from "../assets/food5.jpg";
import food4 from "../assets/food5.jpg";

const images = [food1, food2, food3, food4];

const AboutSection = () => {
  return <PhotoSlider images={images} />;
};

export default AboutSection;
