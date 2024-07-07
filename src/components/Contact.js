import React from "react";
import "../Assests/styles.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div className="contact-container contactMe">
      <div className="contact-sidebar">
        <h2 className="projectheading">CONTACT</h2>
        <div className="contact-info">
          <div className="contact-item">
            <PhoneIcon className="icon" />
            <p>
              Mobile No
              <br />
              +91 8848652896
            </p>
          </div>
          <div className="contact-item">
            <LocationOnIcon className="icon" />
            <p>
              Location
              <br />
              Kerala, India
            </p>
          </div>
          <div className="contact-item">
            <EmailIcon className="icon" />
            <p>
              Email
              <br />
              rahulvidx0696@gmail.com
            </p>
          </div>

          <div className="contact-item">
            <GitHubIcon className="icon" />
            <a href="https://github.com/RahulK2396" target="_blank">GitHub</a>
          </div>
          <br></br>

          <div className="contact-item">
            <LinkedInIcon className="icon" />
            <a href="https://www.linkedin.com/in/rahul-k-42742b136/" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="contact-form ">
        <h2>Send Me A Message</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea
            rows="10"
            placeholder="Type your Message Here..."
          ></textarea>
          <button >Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
