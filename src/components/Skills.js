import React from "react";
import "../Assests/styles.css";

function Projects() {
  return (
    <div className="services">
      <h1 className="projectheading">PROJECTS</h1>
      <div className="projects">
      <div className="service">
        <div className="service-icon">
          <i className="fa-solid fa-pen-ruler"></i>
        </div>
        <h2 className="projecttitle">ESBookify</h2>
        <ul>
          <li>
            A game tournament website, enabling users to organize and
            participate in competitive events with features like user
            registration and dynamic point tables.
          </li>
          <br></br>
          <li>
            Engineered and maintained Git version control system, ensuring
            accurate tracking of code changes and facilitating seamless
            integration of front-end components with server-side logic. This
            collaboration elevated application functionality, leading to a 30%
            improvement in user experience metrics.
          </li>
        </ul>
      </div>
      <div className="service">
        <div className="service-icon">
          <i className="fa-solid fa-globe"></i>
        </div>
        <h2 className="projecttitle">ESShopify</h2>
        <ul>
          <li>
            A user-friendly shopping website with responsive design, delivering
            an enhanced shopping experience.
          </li>
          <br></br>
          <li>
            Solely responsible for the development of a responsive and
            user-friendly shopping website within a limited timeframe.
            Throughout the project, oversight of a Git repository was
            maintained. Furthermore, instrumental involvement was demonstrated
            in both the development and upkeep of a web application, integrating
            state-of-the-art technology to optimize performance.
          </li>
        </ul>
      </div>
      {/* <div className="service">
        <div className="service-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <h2 className="projecttitle">Webdev Fusion</h2>
        <ul>
          <li>
            Orchestrated a high impact, month-long internship project
            encompassing a diverse array of web development initiatives.
            Executed various web development tasks encompassing frontend and
            backend responsibilities
          </li>
          <br></br>
          <li>
            Executed a diverse array of web development tasks, predominantly
            focusing on HTML and JavaScript, covering both frontend and backend
            responsibilities.Collaborated with cross-functional teams to
            understand project requirements and deliver efficient solutions.
          </li>
        </ul>
      </div> */}
      </div>
    </div>
  );
}

export default Projects;
