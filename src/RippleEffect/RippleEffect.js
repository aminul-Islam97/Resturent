import React, { useState } from "react";
import "./RippleEffect.css";

const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const newRipple = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <div className="ripple-container" onClick={createRipple}>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;
