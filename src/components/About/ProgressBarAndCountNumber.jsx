import React, { useEffect, useState } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ProgressBarAndCountNumber() {
  const [count, setCount] = useState(0);
  const MAX = 80;

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation should happen only once while scrolling down
    });
    AOS.refresh(); // Refresh AOS to detect changes
  }, []);

  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress");

    const run = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= MAX) {
          clearInterval(run);
          return prevCount;
        }
        return prevCount + 1;
      });

      progressBars.forEach((progressBar) => {
        const targetValue = parseInt(progressBar.dataset.progress, 10);

        if (count <= targetValue) {
          const gradient = `conic-gradient(#ffb400 ${count}%, #212428 0)`;
          progressBar.parentElement.style.background = gradient;
          progressBar.firstElementChild.textContent = `${count}%`;
        }
      });
    }, 20);

    return () => clearInterval(run);
  }, [count]);

  return (
    <div className="container mt-5">
      <div className="row">
        <h3 className="mb-5 head fw-bold">
          MY <span style={{ color: "gold" }}> SKILLS</span>
        </h3>
      </div>
      <div className="row">
        {renderSkill("HTML", 70, "zoom-out-up")}
        {renderSkill("CSS", 60, "zoom-out-up", 100)}
        {renderSkill("JavaScript", 50, "zoom-out-up", 200)}
      </div>
      <div className="row my-5">
        {renderSkill("ReactJS", 25, "zoom-out-up")}
        {renderSkill("Version Control", 50, "zoom-out-up", 100)}
        {renderSkill("BootStrap", 50, "zoom-out-up", 200)}
      </div>
    </div>
  );

  function renderSkill(skill, progress, animation, delay = 0) {
    return (
      <div
        className="col-12 col-sm-4"
        data-aos={animation}
        data-aos-delay={delay}
        key={skill}
      >
        <div className="parent-skill">
          <div className="skill">
            <div className="progress" data-progress={progress}>
              <span className="progress-number">{count}%</span>
            </div>
          </div>
          <div className="row my-3 justify-content-center">
            <div className="col-6 col-sm-10">
              <span className="title1 t_topic" style={{ color: "white" }}>
                {skill}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBarAndCountNumber;
