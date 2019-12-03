import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";

const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" exact>
        BurgerBuilder
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
