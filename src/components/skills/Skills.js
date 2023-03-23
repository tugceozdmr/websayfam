import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
    
      <div className="skills-item-container">
              <h3 > Java Script</h3>
              <h3 className="space">React</h3>
              <h3 >Node.js</h3>
              </div>

              <div className="skills-item-content">
                <p className="skills-item-content1"> I can effectively use the Java-<br></br>Script  created to bring  vitality <br></br> and dynamism to web pages.</p>
                  <p className="skills-item-content2"> I can create projects with React,<br></br>an open-source javascript library <br></br>for  creating user interfaces.</p>
                    <p className="skills-item-content3"> I can do projects with Node.Js, <br></br> which is an open-source, generally<br></br> server-side operating environment<br></br> developed for networked applications.  </p>
                    </div>
              </div>
  );
}
