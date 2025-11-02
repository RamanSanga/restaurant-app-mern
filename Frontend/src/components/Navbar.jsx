import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://template.canva.com/EAGHzuEFphw/2/0/1600w-VJaaNSmdIkc.jpg"
            alt="Chai Churi"
            className="logo3"
          />
        </div>

        {/* Navigation Links */}
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <ScrollLink
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
                onClick={() => setShow(false)} // close menu on mobile
              >
                {element.title}
              </ScrollLink>
            ))}
          </div>

          {/* Go to Menu Page */}
          <RouterLink to="/menu" className="menuBtn" onClick={() => setShow(false)}>
            OUR MENU
          </RouterLink>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
