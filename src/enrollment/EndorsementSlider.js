import React, { useState } from "react";
import "./EndorsementSlider.css";

const EndorsementSlider = ({ endorsements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const { text, name, role, stars, image } = endorsements[currentIndex];

  return (
    <section className="endorsement">
      <div className="endorsement-overlay">
        <div className="endorsement-content">
          <h2>ENDORSEMENT</h2>
          <p className="endorsement-text">“ {text} ”</p>

          <div className="endorsement-customer">
            <img src={image} alt={name} className="customer-img" />
            <div>
              <h4>{name}</h4>
              <p>{role}</p>
            </div>
          </div>

          <div className="stars">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < stars ? "star filled" : "star"}>
                ★
              </span>
            ))}
          </div>
          <div className="dots">
            {endorsements.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndorsementSlider;
