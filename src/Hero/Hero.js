import React, { useState } from "react";
import "./Hero.css";
import city from "../assets/city.png";
import food from "../assets/f1.jpg";
import dinner from "../assets/f2.jpg";

const slides = [
  {
    image: city,
    title: "FRESH AND DELICIOUS RESTAURANT",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    image: dinner,
    title: "BEST QUALITY INGREDIENTS",
    text: "We use fresh and organic ingredients to make your meals healthy and delicious.",
  },
  {
    image: food,
    title: "ENJOY YOUR DINNER WITH VIEW",
    text: "Book your table and experience a romantic evening with the best view in town.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>
            {slides[current].title.split(" ").map((word, i) =>
              word.toUpperCase() === "DELICIOUS" ? (
                <span key={i}>{word} </span>
              ) : (
                word + " "
              )
            )}
          </h1>
          <p>{slides[current].text}</p>
          <button className="btn">BOOK A TABLE →</button>

          {/* Dots Navigation */}
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
