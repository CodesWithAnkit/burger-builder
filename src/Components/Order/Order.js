import React from "react";
import "./Order.css";

const Order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientsOutput = ingredients.map(ig => (
    <span
      style={{
        textTransform: "capitalize",
        display: "inline-block",
        margin: "0px 8px",
        border: "1px solid #ccc",
        padding: "5px"
      }}
      key={ig.name}
    >
      {ig.name} {ig.amount}
    </span>
  ));
  return (
    <div className="Order">
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
