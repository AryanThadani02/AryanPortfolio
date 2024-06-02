import React, { useEffect } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Sidebar() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <div></div>
      <div className="aside">
        <ul className="ul">
          <NavLink to="/" className="l1" data-aos="fade-left">
            <h6 className="l1_h6">HOME</h6>
            <i className="fa-solid fa-house text-dark"></i>
          </NavLink>
          <NavLink
            to="/about"
            className="l2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h6 className="l2_h6">ABOUT</h6>
            <i className="fa-solid fa-user text-dark"></i>
          </NavLink>
          <NavLink
            to="/services"
            className="l5"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h6 className="l5_h6">SERVICES</h6>
            <i className="fa-solid fa-layer-group text-dark"></i>
          </NavLink>
          <NavLink
            to="portfolio"
            className="l3"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h6 className="l3_h6">PORTFOLIO</h6>
            <i className="fa-solid fa-briefcase text-dark"></i>
          </NavLink>
          <NavLink
            to="/contact"
            className="l4"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h6 className="l4_h6">CONTACT</h6>
            <i className="fa-solid fa-envelope text-dark"></i>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
