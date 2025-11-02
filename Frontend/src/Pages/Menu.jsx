import React from "react";
import { data } from "../restApi.json";

const MenuPage = () => {
  return (
    <section className="menuPage" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">✨ Our Special Menu ✨</h1>
          <p>
            Experience the taste of tradition and innovation. Each dish is
            prepared with love, using the freshest ingredients and authentic
            flavors.
          </p>
        </div>

        <div className="menu_container">
          {data[0].dishes.map((dish) => (
            <div className="menu_card" key={dish.id}>
              <div className="img_wrapper">
                <img src={dish.image} alt={dish.name} />
              </div>
              <div className="menu_content">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <h4>₹{dish.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
