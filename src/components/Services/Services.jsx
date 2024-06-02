import React, { useEffect } from "react";
import "./Services.css";
import "../Home/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <div
        className="background"
        style={{ backgroundColor: "#121212", width: "100%", height: "100%" }}
      >
        <div className="container outer_container pt-5 pb-1">
          <div className="services">
            <div className="navbackground mt-2">
              <div className="container">
                <div className="row">
                  <div className="backgrounddiv" data-aos="fade-up">
                    <span className="backgroundtext">
                      services
                      <h1 className="services_title">
                        my <span>skills</span>
                      </h1>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container my-5">
            <div className="row justify-content-center">
              <div
                className="col-xl-5 col-12 services_img_div col_background px-5 py-4 mx-auto mt-5"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <div className="row ser">
                  <div className="col-4 service d-flex align-items-center">
                    <img className="service_img" src="html.png" alt="HTML" />
                  </div>
                  <div className="col-xl-7 col-xl-6 col-sm-7 col-12 services_div mt-2 ms-3">
                    <h5>HTML</h5>
                    <div>
                      HTML is the code that is used to structure a web page and
                      its content
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-12 services_img_div col_background px-5 py-4 mx-auto mt-5"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <div className="row ser">
                  <div className="col-4 service d-flex align-items-center">
                    <img className="service_img" src="css.png" alt="CSS" />
                  </div>
                  <div className="col-xl-7 col-xl-6 col-sm-7 col-12 services_div mt-2 ms-3">
                    <h5>CSS</h5>
                    <div>
                      CSS is the language we use to style an HTML document
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-12 services_img_div col_background px-5 py-4 mx-auto mt-5"
                data-aos="fade-up"
                data-aos-delay="2000"
              >
                <div className="row ser">
                  <div className="col-4 service">
                    <img
                      className="service_img bootstrap"
                      src="bootstrap.png"
                      alt="Bootstrap"
                    />
                  </div>
                  <div className="col-xl-7 col-xl-6 col-sm-7 col-12 services_div mt-2 ms-3">
                    <h5>Bootstrap</h5>
                    <div>
                      Bootstrap is the most popular HTML, CSS, and JavaScript
                      framework for developing responsive, mobile-first
                      websites.
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-12 services_img_div col_background px-5 py-4 mt-5 mx-auto"
                data-aos="fade-up"
                data-aos-delay="2000"
              >
                <div className="row ser">
                  <div className="col-4 service d-flex align-items-center">
                    <img
                      className="service_img"
                      src="js.png"
                      alt="JavaScript"
                    />
                  </div>
                  <div className="col-xl-7 col-xl-6 col-sm-7 col-12 services_div mt-2 ms-3">
                    <h5>JavaScript</h5>
                    <div>
                      JavaScript is an object-oriented computer programming
                      language commonly used to create interactive effects
                      within web browsers.
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-12 services_img_div col_background px-5 py-4 my-5 mx-auto"
                data-aos="fade-up"
                // data-aos-delay="4000"
              >
                <div className="row ser">
                  <div className="col-4 service d-flex align-items-center">
                    <img className="service_img" src="tw.png" alt="ReactJS" />
                  </div>
                  <div className="col-xl-7 col-xl-6 col-sm-7 col-12 services_div mt-2 ms-3">
                    <h5>Tailwind</h5>
                    <div>
                      Tailwind CSS is a utility-first framework for rapidly
                      building custom user interfaces with low-level utility
                      classes and minimal custom styles.
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-12 services_img_div col_background px-5 py-4 my-5 mx-auto"
                data-aos="fade-up"
                // data-aos-delay="4000"
              >
                <div className="row ser">
                  <div className="col-4 service d-flex align-items-center">
                    <img
                      className="service_img"
                      src="react.png"
                      alt="ReactJS"
                    />
                  </div>
                  <div className="col-xl-7 col-xl-6 col-sm-7 col-12 services_div mt-2 ms-3">
                    <h5>ReactJS</h5>
                    <div>
                      React is a free and open-source front-end JavaScript
                      library for building user interfaces based on components
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
