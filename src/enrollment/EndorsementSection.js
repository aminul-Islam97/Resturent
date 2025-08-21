import React from "react";
import EndorsementSlider from "./EndorsementSlider";

import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";

const endorsements = [
  {
    text: "Amazing food and great service! I always enjoy my visits here.",
    name: "John Doe",
    role: "Customer",
    stars: 5,
    image: customer1,
  },
  {
    text: "The best restaurant in town. Their dishes are always fresh.",
    name: "Sarah Lee",
    role: "Customer",
    stars: 4,
    image: customer2,
  },
];

const EndorsementSection = () => {
  return <EndorsementSlider endorsements={endorsements} />;
};

export default EndorsementSection;
