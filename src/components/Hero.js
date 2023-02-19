import React from "react";
import Picture2 from "../img/Picture2.jpg";
import githublogo from "../img/github-icon.svg";
import linkedinlogo from "../img/linkedin-icon.svg";
import mail from "../img/mail.svg";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-detail">
        <div className="hero-dashed-name">
          <span className="header-dash" />
          Tuğçe Özdemir
        </div>
        <h1> Creative Thinker  Minimalism Lover </h1>
     

        <div className="subtext">
          Hi, I am Tuğçe. I graduated from Uludag University as an engineer. If you are looking
          for a developer who to craft solid and scalable frontend products with
          great user experiences. Let’s shake hands with me.{" "}
        </div>
        <div className="link-container">
          <a
            href="mailto:tugceozdemiir@hotmail.com"
            rel="noreferrer"
            className="link"
          >
            <img src={mail} alt="" className="btnicon" />
            Hire Me
          </a>

          <a
            href="https://github.com/tugceozdmr?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <img src={githublogo} alt="" className="btnicon" />
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/tugceeozdemir/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <img src={linkedinlogo} alt="" className="btnicon" />
            Linkedin
          </a>
        </div>
      </div>

      <img src={Picture2} alt="" className="hero-photo" />
    </div>
  );
}
