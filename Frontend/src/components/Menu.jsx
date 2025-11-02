import React from "react";
import { data } from "../restApi.json";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">Our Signature Dishes</h1>
          <p>
            Explore the art of fine dining — each dish is crafted with passion,
            premium ingredients, and a touch of culinary excellence to satisfy
            every craving.
          </p>
        </div>

        <div className="dishes_container">
          {data[0].dishes.map((element) => (
            <div className="card" key={element.id}>
              <div className="image_wrapper">
                <img src={element.image} alt={element.title} />
                <button className="category_btn">{element.category}</button>
              </div>
              <h3>{element.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
