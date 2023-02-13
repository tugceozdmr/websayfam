import React from "react";
import Picture2 from "../img/Picture2.jpg";
import githublogo from "../img/github-icon.svg";
import linkedinlogo from "../img/linkedin-icon.svg";
import mail from "../img/mail.svg";

const handleClick=()=>{
  window.scrollTo(200,1200)
}


export default function Hero() {
  return (
    <div className="hr">
      <h1>  Creative Thinker <br /> <br />
      
        Hi, I am Tuğçe. I graduated from Uludag University as an engineer. I'm
        interested in being a developer, it's my passion. If you are looking for
        a developer who to craft solid and scalable frontend products with great
        user experiences. Let’s shake hands with me.
        <br />{" "}
        <div className="button2">
       
          
          <button onClick={handleClick} className="bt1"><img src={mail} alt="" className="btnicon" /> Hire Me </button>
          

          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/tugceozdmr?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
          
            <button className="bt2">
             
                <img src={githublogo} alt="" className="btnicon" />
           
              Github
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/tugceeozdemir/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bt3">
            <img src={linkedinlogo} alt="" className="btnicon" />
            Linkedin 
            </button>
          </a>
        </div>
      </h1>

      <img src={Picture2} alt="" className="photo" />
    </div>
  );
}
