import React from "react";
import portfolio1 from "../Assests/image/portfolio1.jpg";
import Typewriter from "typewriter-effect";
import "../Assests/styles.css";

function Home() {
  return (
    <div className="home-slide">
      <h1 className="portfolio">PORTFOLIO </h1>
      <div className="home-contenttt">
        <div className="HomeContent">
          <h1>
            Hi! I'm <span className="stylized-name">RAHUL</span>
          </h1>
          <h2>
            <span className="proffesions">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Nextjs Developer",
                    "ReactJs Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 3,
                }}
              />
            </span>
          </h2>
          <p className="heroline">
            Experienced Full-Stack Developer with one year of expertise in
            ReactJS, Redux, Node.js, and Express, adept at building responsive
            web applications and implementing robust backend solutions. Skilled
            in collaborating with teams to deliver high-quality software
            products while adhering to best practices and ensuring optimal
            performance. Currently Pursuuing BCA at IGNOU, Distant Education.
          </p>
          <div className="buttonGroup">
            <button>Resume</button>
          </div>
        </div>
        <div className="SideImg">
          <div className="top-right-corner"></div>
          <img src={portfolio1} alt="" />
          <div className="bottom-left-corner"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
