import React from "react";
import MenuSection from "./MenuSection";

const dishes = [
  { name: "Mussels Soup", description: "Delicious soup with fresh mussels.", price: 450 },
  { name: "Italian Spaghetti", description: "Classic Italian pasta with rich sauce.", price: 450 },
  { name: "Beef Burger", description: "Juicy burger with fresh toppings.", price: 450 },
  { name: "Stuffed Strawberry", description: "Sweet strawberries with cream filling.", price: 450 },
  { name: "Sicilian Meatballs", description: "Savory meatballs in tomato sauce.", price: 450 },
  { name: "Roast Chicken", description: "Tender chicken roasted to perfection.", price: 450 },
  { name: "Grilled Fish", description: "Fresh fish grilled with spices.", price: 450 },
  { name: "Seafood Salad", description: "Mixed seafood salad with dressing.", price: 450 },
];

const OurMenu = () => {
  return (
    <MenuSection 
      title="OUR MENU"
      subtitle="TASTY AND CRUNCHY"
      dishes={dishes}
    />
  );
};

export default OurMenu;
