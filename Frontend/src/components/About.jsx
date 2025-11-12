import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Crafting memorable dining experiences, one plate at a time.</p>
            </div>
            <p className="mid">
              Welcome to <b>Gusto Haven</b> — where flavor meets passion.
              Our chefs blend authentic recipes with a modern twist to bring
              you dishes that celebrate both tradition and creativity.  
              From farm-fresh ingredients to handpicked spices, every meal we
              serve tells a story of care, warmth, and culinary excellence.
              Whether you’re here for a casual meal or a fine dining evening,
              we promise an experience that delights every sense.
            </p>
            <Link to={"/menu"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="Restaurant interior" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
