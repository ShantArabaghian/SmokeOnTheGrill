import React from "react";
export default function Mains({ meals, type2 }) {
  return (
    <section className="mains">
      <h2 className="extras-heading">{type2}</h2>
      {meals.map((meal, index) => (
        <article className="menu-item" key={index}>
          <h3 className="mains-name">{meal.name}</h3>
          <strong className="mains-price">${meal.price}</strong>
          <p className="mains-description">{meal.description}</p>
        </article>
      ))}
    </section>
  );
}
