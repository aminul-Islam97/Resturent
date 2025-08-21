import React from "react";
import "./MenuSection.css";

const MenuSection = ({ title, subtitle, dishes }) => {
  return (
    <section className="menu-section">
      <div className="menu-header">
        <h4>{subtitle}</h4>
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      </div>

      <div className="menu-grid">
        {dishes.map((dish, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-info">
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
            </div>
            <span className="price">${dish.price}</span>
          </div>
        ))}
      </div>

      <div className="menu-footer">
        <button className="menu-btn">SHOW ALL</button>
      </div>
    </section>
  );
};

export default MenuSection;
