import React from "react";
import "../Assests/styles.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import GitHubIcon from "@mui/icons-material/GitHub";

function Expertise() {
  return (
    <div className="about-us">
      <h1 className="portfolio">EXPERTISE</h1>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
          >
            July 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <GitHubIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" color={"#00ff80"}>
              Akcepted, Software Developer
            </Typography>
            <Typography></Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
            January 2024 - June 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopChromebookIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" color={"#00ff80"}>
              NeoSpace, Frontend Developer
            </Typography>
            <Typography>
              <ul>
                <li>
                  Executed various web development tasks encompassing frontend
                  and backend responsibilities.
                </li>
                <li>
                  Stayed updated with emerging technologies and industry trends
                  to continuously enhance development practices
                </li>
              </ul>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
            May 2023 - November 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" color={"#00ff80"}>
              WebSoulLabs - Full Stack Developer
            </Typography>
            <Typography>
              <ul>
                <li>
                  Engineered and maintained Git version control system, ensuring
                  accurate tracking of code changes and facilitating seamless
                  integration of front-end components with server-side logic.
                  This collaboration elevated application functionality, leading
                  to a 30% improvement in user experience metrics.
                </li>
                <li>
                  Played a key role in developing and maintaining web
                  applications, incorporating the latest technologies and
                  ensuring optimal performance
                </li>
              </ul>
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <div className="mobile-expertise">
        <h3>Akcepted</h3>
        <div className="mobile-expertise-position">
          <h5>Software Developer</h5>
          <h5>July'24-Present</h5>
        </div>
        <ul>
          <li>
            Currently gaining hands-on experience in software development,
            enhancing skills in frontend technologies like ReactJS and Material
            UI.
          </li>
          <li>
            Contributing to various projects, collaborating with the team to
            implement efficient and effective solutions.
          </li>
        </ul>

        <h3>NeoSpace</h3>
        <div className="mobile-expertise-position">
          <h5>Software Developer</h5>
          <h5>Jan'24-Jun'24</h5>
        </div>
        <ul>
          <li>
            Executed various web development tasks encompassing frontend and
            backend responsibilities.
          </li>
          <li>
            Stayed updated with emerging technologies and industry trends to
            continuously enhance development practices
          </li>
        </ul>

        <h3>WebSoulLabs</h3>
        <div className="mobile-expertise-position">
          <h5>Full Stack Developer</h5>
          <h5>May'23-Nov'23</h5>
        </div>
        <ul>
          <li>
            Engineered and maintained Git version control system, ensuring
            accurate tracking of code changes and facilitating seamless
            integration of front-end components with server-side logic.
          </li>
          <li>
            Played a key role in developing and maintaining web applications,
            incorporating the latest technologies and ensuring optimal
            performance
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Expertise;
