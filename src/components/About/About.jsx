import React, { useEffect } from "react";
import "./About.css";
import ProgressBarAndCountNumber from "./ProgressBarAndCountNumber";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <div className="about">
        <div
          className="background"
          style={{ backgroundColor: "#121212", width: "100%", height: "100%" }}
        >
          <div className="container outer_container pt-5 pb-1">
            <div className="navbackground mt-2" data-aos="fade-down">
              <div className="container">
                <div className="row">
                  <div className="backgrounddiv">
                    <span className="backgroundtext">
                      resume
                      <h1 className="about_title">
                        about <span>me</span>
                      </h1>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="About mt-5 pt-5">
              <div className="container-fluid">
                <div className="row block_1 separator" data-aos="fade-up">
                  <div className="col-12 mb-3">
                    <span className="fw-bold head">
                      PERSONAL{" "}
                      <span className="head" style={{ color: "gold" }}>
                        INFOS
                      </span>
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-md-6">{renderPersonalInfo(true)}</div>
                    <div className="col-md-6">{renderPersonalInfo(false)}</div>
                  </div>
                </div>
                <ProgressBarAndCountNumber />
                <div className="row my-5 my-sm-2 mb-5 pt-5" data-aos="fade-up">
                  <div className="row">
                    <div className="col-12">
                      <h3 className="head fw-bold mb-5">
                        Experience and
                        <span style={{ color: "gold" }}> Education</span>
                      </h3>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-12 col-lg-6">
                      {renderExperienceAndEducationLeft()}
                    </div>
                    <div className="col-md-12 col-lg-6">
                      {renderExperienceAndEducationRight()}
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

  function renderPersonalInfo(isLeftColumn) {
    const personalInfos = [
      { label: "First Name:", value: " Aryan" },
      { label: "Age:", value: " 21 Years" },
      { label: "Freelance:", value: " Available", style: { color: "green" } },
      { label: "Phone:", value: " +91 7014089510" },
      { label: "Last Name:", value: " Thadani" },
      { label: "Nationality:", value: " Indian" },
      { label: "Address:", value: " Jodhpur, Rajasthan" },
      { label: "Email:", value: " aryanthadani022@gmail.com" },
    ];

    const half = Math.ceil(personalInfos.length / 2);
    const infosToRender = isLeftColumn
      ? personalInfos.slice(0, half)
      : personalInfos.slice(half);

    return infosToRender.map((info, index) => (
      <div className="col-12 my-2" key={index}>
        <div className="row">
          <div className="col-12 mb-3 flexClass">
            <span className="left">{info.label}</span>
            <span className="right" style={info.style || {}}>
              {info.value}
            </span>
          </div>
        </div>
      </div>
    ));
  }

  function renderExperienceAndEducationLeft() {
    const experiences = [
      {
        date: "2024 - Present",
        description: "Web Development Internship - ",
        company: "Rising Academies",
      },
      {
        date: "2023 - Present",
        description: "Full Stack Web Development Course - ",
        company: "Geekster",
      },
      {
        date: "2023",
        description: "Web Development Internship - ",
        company: "Open Innovations Lab",
      },
      {
        date: "2023",
        description: "JavaScript & ReactJs Training - ",
        company: "Open Innovations Lab",
      },
    ];

    return (
      <ul style={{ listStyle: "none" }}>
        {experiences.map((exp, index) => (
          <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <span className="time mt-4">{exp.date}</span>
            <h5>
              {exp.description}
              <span className="fst-italic fw-normal">{exp.company}</span>
            </h5>
          </li>
        ))}
      </ul>
    );
  }

  function renderExperienceAndEducationRight() {
    const experiences = [
      {
        date: "2020-2023",
        description: "Bachelor of Computer Application - ",
        company: "Lachoo Memorial College",
      },
      { date: "2021-2023", description: "Home Tutor - ", company: "Personal" },
      {
        date: "2022",
        description: "Beginner Front-End Development Course - ",
        company: "T4 Tech",
      },
      {
        date: "2020",
        description: "Higher Secondary School - ",
        company: "Our Lady Of Pillar Convent School",
      },
    ];

    return (
      <ul style={{ listStyle: "none" }}>
        {experiences.map((exp, index) => (
          <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <span className="time mt-4">{exp.date}</span>
            <h5>
              {exp.description}
              <span className="fst-italic fw-normal">{exp.company}</span>
            </h5>
          </li>
        ))}
      </ul>
    );
  }
};

export default About;
