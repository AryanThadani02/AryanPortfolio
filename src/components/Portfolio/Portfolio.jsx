import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";
// import Navbar from '../Navbar/Navbar'
import Sidebar from "../Sidebar/Sidebar";

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);

  // Array of project data
  const projects = [
    {
      href: "https://aryanthadani02.github.io/Crypto-Project/",
      imgSrc: "https://etimg.etb2bimg.com/photo/94912983.cms",
      title: "Crypto",
      subtitle: "View",
    },
    {
      href: "https://aryanthadani02.github.io/PhoneCatalogue/",
      imgSrc:
        "https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-to-buy-in-2024---our-top-10-list.jpg?1716206294",
      title: "Phone",
      subtitle: "Catalogue",
    },
    {
      href: "https://aryanthadani02.github.io/PokemonCollection/",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWGJvDqFPH1pO74dEgCF_v92rBnBKaa094XQ&s",
      title: "Pokemon",
      subtitle: "Collection",
    },
    {
      href: "https://aryanthadani02.github.io/DadJokes/",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIrycnz5AQNmYqndHut3BxKLvTYUNrTVU7w&s",
      title: "Dad",
      subtitle: "Jokes",
    },
    {
      href: "https://aryanthadani02.github.io/Unsplash-Clone/",
      imgSrc: "unsplash.avif",
      title: "Clone",
      subtitle: "Unsplash",
    },
    {
      href: "https://aryanthadani02.github.io/Emoji-Finder/",
      imgSrc: "017b6fca-3261-4fed-a5b6-b408a832969a.png",
      title: "Emoji",
      subtitle: "Finder",
    },
    {
      href: "https://aryanthadani02.github.io/WeatherApp/",
      imgSrc:
        "https://static01.nyt.com/images/2014/05/25/magazine/25wmt/mag-25WMT-t_CA0-superJumbo.jpg",
      title: "Weather",
      subtitle: "Watch",
    },
    {
      href: "https://aryanthadani02.github.io/Loreal-Clone/",
      imgSrc: "Font-LOReal-Logo.jpg",
      title: "Clone",
      subtitle: "Loreal",
    },
    {
      href: "https://www.woodwavewonders.com/",
      imgSrc: "https://www.woodwavewonders.com/assets/Group%20222.svg",
      title: "WoodWave",
      subtitle: "Wonders",
    },
    {
      href: "https://aryanthadani02.github.io/Calculator/",
      imgSrc: "calc.png",
      title: "Basic",
      subtitle: "Calculator",
    },
    {
      href: "https://aryanthadani02.github.io/To-Do-List/",
      imgSrc: "tdl.png",
      title: "to-do",
      subtitle: "list",
    },
    {
      href: "https://6576b22f5345c13bfa843ab7--extraordinary-mermaid-17602b.netlify.app/",
      imgSrc: "Netflix.png",
      title: "clone",
      subtitle: "Netflix",
    },
    {
      href: "https://aryanthadani02.github.io/Car-Animation/",
      imgSrc: "car.jpeg",
      title: "Car",
      subtitle: "animation",
    },
    {
      href: "https://aryanthadani02.github.io/Stone-Paper_Scissor-Game/",
      imgSrc: "psr.webp",
      title: "Game",
      subtitle: "Stone-paper-scissor",
    },
    {
      href: "https://aryanthadani02.github.io/Ask-out/",
      imgSrc: "ao.jpeg",
      title: "Ask-Out",
      subtitle: "Project",
    },
    {
      href: "https://aryanthadani02.github.io/Roborto-Clone/",
      imgSrc: "hotel.webp",
      title: "hotel & resort",
      subtitle: "Roberto",
    },
    {
      href: "https://aryanthadani02.github.io/Matrimonial-Project/",
      imgSrc: "matri.jpg",
      title: "Matrimonial",
      subtitle: "Project",
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
                  data-aos-delay={index * 100}
                  key={index}
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
