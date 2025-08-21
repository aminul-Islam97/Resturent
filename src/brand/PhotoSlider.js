import React, { useState } from "react";
import "./PhotoSlider.css";

const PhotoSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="photo-slider">
      <div className="slider-header">
        <h2>
          Certified <span>Restaurant</span> Brand <br /> Since - 2000
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      </div>

      <div className="slider-gallery">
        <div className="slider-image" onClick={nextImage}>
          <img src={images[index]} alt={`Food ${index}`} />
        </div>
        <div className="slider-image" onClick={nextImage}>
          <img src={images[(index + 1) % images.length]} alt={`Food ${index + 1}`} />
        </div>
      </div>

      <div className="slider-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

      <button className="more-btn">MORE ABOUT</button>
    </section>
  );
};

export default PhotoSlider;
