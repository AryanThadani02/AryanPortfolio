import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";
import Sidebar from "../Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Initialize AOS for modal content
    AOS.init({
      duration: 1000,
      once: false,
      // Additional options for modal animation
    });
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const projects = [
    {
      href: "https://aryanthadani02.github.io/Crypto-Project/",
      imgSrc: "https://etimg.etb2bimg.com/photo/94912983.cms",
      title: "Crypto",
      subtitle: "View",
      description:
        "A cryptocurrency tracker app that shows the latest prices and trends.",
      githubLink: "https://github.com/AryanThadani02/Crypto-Project",
    },
    {
      href: "https://aryanthadani02.github.io/PhoneCatalogue/",
      imgSrc:
        "https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-to-buy-in-2024---our-top-10-list.jpg?1716206294",
      title: "Phone",
      subtitle: "Catalogue",
      description: "A comprehensive catalog of the latest smartphones.",
      githubLink: "https://github.com/AryanThadani02/PhoneCatalogue",
    },
    {
      href: "https://aryanthadani02.github.io/PokemonCollection/",
      imgSrc: "poke.jpg",
      title: "Pokemon",
      subtitle: "Collection",
      description: "An app to view and manage your Pokémon collection.",
      githubLink: "https://github.com/AryanThadani02/PokemonCollection",
    },
    {
      href: "https://aryanthadani02.github.io/DadJokes/",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIrycnz5AQNmYqndHut3BxKLvTYUNrTVU7w&s",
      title: "Dad",
      subtitle: "Jokes",
      description: "A fun app that generates random dad jokes.",
      githubLink: "https://github.com/AryanThadani02/DadJokes",
    },
    {
      href: "https://aryanthadani02.github.io/Unsplash-Clone/",
      imgSrc: "unsplash.avif",
      title: "Clone",
      subtitle: "Unsplash",
      description: "A clone of the popular Unsplash website for free images.",
      githubLink: "https://github.com/AryanThadani02/Unsplash-Clone",
    },
    {
      href: "https://aryanthadani02.github.io/Emoji-Finder/",
      imgSrc: "017b6fca-3261-4fed-a5b6-b408a832969a.png",
      title: "Emoji",
      subtitle: "Finder",
      description: "Find and copy emojis easily with this app.",
      githubLink: "https://github.com/AryanThadani02/Emoji-Finder",
    },
    {
      href: "https://aryanthadani02.github.io/WeatherApp/",
      imgSrc:
        "https://static01.nyt.com/images/2014/05/25/magazine/25wmt/mag-25WMT-t_CA0-superJumbo.jpg",
      title: "Weather",
      subtitle: "Watch",
      description: "A weather app to check current weather conditions.",
      githubLink: "https://github.com/AryanThadani02/WeatherApp",
    },
    {
      href: "https://aryanthadani02.github.io/Loreal-Clone/",
      imgSrc: "loreal.jpg",
      title: "Clone",
      subtitle: "Loreal",
      description: "A clone of the L'Oreal website.",
      githubLink: "https://github.com/AryanThadani02/Loreal-Clone",
    },
    {
      href: "https://www.woodwavewonders.com/",
      imgSrc: "https://www.woodwavewonders.com/assets/Group%20222.svg",
      title: "WoodWave",
      subtitle: "Wonders",
      description: "A project showcasing woodwave wonders.",
      githubLink: "https://github.com/AryanThadani02/WoodWaveWonders",
    },
    {
      href: "https://aryanthadani02.github.io/Calculator/",
      imgSrc: "calc.png",
      title: "Basic",
      subtitle: "Calculator",
      description: "A basic calculator app.",
      githubLink: "https://github.com/AryanThadani02/Calculator",
    },
    {
      href: "https://aryanthadani02.github.io/To-Do-List/",
      imgSrc: "tdl.png",
      title: "To-Do",
      subtitle: "List",
      description: "A simple to-do list application.",
      githubLink: "https://github.com/AryanThadani02/To-Do-List",
    },

    {
      href: "https://aryanthadani02.github.io/Car-Animation/",
      imgSrc: "car.jpeg",
      title: "Car",
      subtitle: "Animation",
      description: "A car animation project.",
      githubLink: "https://github.com/AryanThadani02/Car-Animation",
    },
    {
      href: "https://aryanthadani02.github.io/Stone-Paper_Scissor-Game/",
      imgSrc: "psr.webp",
      title: "Game",
      subtitle: "Stone-paper-scissor",
      description: "A stone-paper-scissor game.",
      githubLink: "https://github.com/AryanThadani02/Stone-Paper_Scissor-Game",
    },
    {
      href: "https://aryanthadani02.github.io/Ask-out/",
      imgSrc: "ao.jpeg",
      title: "Ask-Out",
      subtitle: "Project",
      description: "A project for asking out.",
      githubLink: "https://github.com/AryanThadani02/Ask-out",
    },
    {
      href: "https://aryanthadani02.github.io/Roborto-Clone/",
      imgSrc: "hotel.webp",
      title: "Hotel & Resort",
      subtitle: "Roberto",
      description: "A clone of the Roberto hotel & resort website.",
      githubLink: "https://github.com/AryanThadani02/Roborto-Clone",
    },
    {
      href: "https://6576b22f5345c13bfa843ab7--extraordinary-mermaid-17602b.netlify.app/",
      imgSrc: "Netflix.png",
      title: "Clone",
      subtitle: "Netflix",
      description: "A clone of the Netflix website.",
      githubLink: "https://github.com/AryanThadani02/Netflix-Clone",
      apiWarning: true,
    },
    {
      href: "https://aryanthadani02.github.io/Matrimonial-Project/",
      imgSrc: "matri.jpg",
      title: "Matrimonial",
      subtitle: "Project",
      description: "A matrimonial project.",
      githubLink: "https://github.com/AryanThadani02/Matrimonial-Project",
      apiWarning: true,
    },
  ];

  return (
    <>
      <div
        className="background"
        style={{ backgroundColor: "#121212", width: "100%", height: "100%" }}
      >
        <div className="container outer_container pt-5 pb-1 ">
          <div className="portfolio">
            <div className="navbackground mt-2">
              <div className="container ">
                <div className="row ">
                  <div className="backgrounddiv " data-aos="flip-up">
                    <span className="backgroundtext">
                      works
                      <h1
                        className="portfolio_title"
                        style={{ letterSpacing: "2px" }}
                      >
                        my <span style={{ color: "gold" }}>portfolio</span>
                      </h1>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="container row justify-content-center mt-4 mb-4">
              {projects.map((project, index) => (
                <div
                  className="col-3 bg_color me-2"
                  data-aos="zoom-in-down"
                  data-aos-delay="100"
                  key={index}
                  onClick={() => openModal(project)}
                >
                  <figure className="snip1576">
                    <img
                      src={project.imgSrc}
                      alt="sample104"
                      style={{ width: "100%", height: "221px" }}
                    />
                    <figcaption>
                      <h3>
                        {project.title} <span>{project.subtitle}</span>
                        {project.apiWarning && (
                          <span className="api">(Api Not working)</span>
                        )}
                      </h3>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <h2 data-aos="flip-right">
              {selectedProject.title} {selectedProject.subtitle}
            </h2>
            <img
              src={selectedProject.imgSrc}
              alt={selectedProject.title}
              className="modal-image"
              data-aos="flip-left"
              data-aos-delay="500"
            />
            <h4 data-aos="fade-up" data-aos-delay="1000">
              {selectedProject.description}
            </h4>
            {selectedProject.apiWarning && (
              <p
                style={{ color: "red" }}
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                API is not working
              </p>
            )}
            <div
              className="modal-links mx-auto mx-md-0"
              data-aos="flip-down"
              data-aos-delay="1500"
            >
              <a
                href={selectedProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Visit Project
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                <FontAwesomeIcon icon={faGithub} /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      <Sidebar />
    </>
  );
}

export default Portfolio;
