import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Assests/styles.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [validationMessage, setValidationMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    console.log(name, email, message);
    // Simple validation
    if (!name) {
      setValidationMessage("Name is  required.");
    } else if (!email) {
      setValidationMessage("Email is required.");
    } else if (!message) {
      setValidationMessage("Message is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setValidationMessage("Please enter a valid email address.");
    } else {
      setValidationMessage("Message sent successfully.");
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    }

    console.log("Form submitted:", formData);
  };

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
            <a
              href="https://github.com/RahulK2396"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <br></br>

          <div className="contact-item">
            <LinkedInIcon className="icon" />
            <a
              href="https://www.linkedin.com/in/rahul-k-42742b136/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send Me A Message</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Type your Message Here..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {validationMessage && (
          <p className="validation-message">{validationMessage}</p>
        )}
          <button onClick={handleSubmit} type="submit">
            Send
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default Contact;
