import React, { useState, useEffect } from "react";
import "./Ingredients.css";

import ingredientsImg from "../assets/ingredient.png";

const Ingredients = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`ingredients-section ${isVisible ? "fade-in" : ""}`}>
      <div className="ingredients-content">
        <h4>TASTY AND CRUNCHY</h4>
        <h2>INGREDIENTS</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident.
        </p>
        <button className="menu-btn">VIEW OUR MENU</button>
      </div>

      <div className="ingredients-image">
        <img src={ingredientsImg} alt="Ingredients" />
      </div>
    </section>
  );
};

export default Ingredients;
