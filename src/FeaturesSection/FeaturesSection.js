import React from "react";
import "./FeaturesSection.css";

import fresh from "../assets/fresh.png";
import healthy from "../assets/healthy.png";
import mediterranean from "../assets/mediterranean.png";
import eatingwell from "../assets/eatingwell.png";

const features = [
  {
    img: fresh,
    title: "FRESH INGREDIENTS",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod labore et dolore magna",
  },
  {
    img: healthy,
    title: "HEALTHY MEALS",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod labore et dolore magna",
  },
  {
    img: mediterranean,
    title: "MEDITERRANEAN TASTE",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod labore et dolore magna",
  },
  {
    img: eatingwell,
    title: "EATING WELL",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod labore et dolore magna",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-img">
            <img src={feature.img} alt={feature.title} />
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
