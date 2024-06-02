import React, { useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1500, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="home d-flex align-items-center justify-content-center">
      <div className="row justify-content-center">
        <div
          className="col-lg-4 col-12 bg mx-5 img col-12 my-5"
          style={{ height: "400px", width: "370px" }}
          data-aos="fade-right"
        >
          <img
            src="home.jpg"
            className="img-fluid"
            style={{ height: "100%", width: "100%" }}
            alt=""
          />
        </div>
        <div className="col-lg-6 text-light mx-auto text-start d-flex align-items-center">
          <div className="home_text ps-5">
            <div className="fs-1 fw-bold mx-3" data-aos="fade-left">
              <span className="home_name position-relative">
                <span
                  className="position-absolute dash"
                  style={{ left: "-50px", bottom: "16px" }}
                >
                  __
                </span>
                I'M ARYAN THADANI.
              </span>
              <br />
              <span className="home_name text-light">FRONT-END DEVELOPER</span>
            </div>
            <div
              className="home_para text-justify fs-5 mt-4 me-5"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              I'm an Indian based web designer & front-end developer focused on
              crafting clean & user-friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </div>
            <NavLink
              className="text-decoration-none text-light buttn mb-5"
              to="/about"
              data-aos="fade-up"
              data-aos-delay="2000"
            >
              <button className="button my-5 px-4 py-3 rounded-pill">
                <span className="fs-6 fw-bold">MORE ABOUT ME</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
