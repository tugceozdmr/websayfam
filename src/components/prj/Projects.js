import React from "react";
import Workintech from "../../img/Workintech.png";
import Proj from "../../img/Proj.png";
import Proj2 from "../../img/pizza.png";
import "./style.css";

export default function Projects() {
  return (
    <div className="prj">
      <div>
        <h1> Projects </h1>
      </div>
      <div className="prjcont">
        <div className="imgcont">
          <img src={Workintech} alt="" className="photo2" />
          <div clasName="paragraf1 ">
I received training in the workintech program, which brings together<br></br> young people who are curious <br></br>about technology.</div>
          <div className="butonC">
            <button>React</button>
            <button>Redux</button>
            <button>Axios</button>
          </div>
          <div style={{ marginTop: "30px" }}>
            <a
              style={{ textDecoration: "underline", color: " #dc0c71" }}
              href="https://workintech.com.tr/"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
          </div>
        </div>
        <div className="imgcont">
          <img src={Proj} alt="" className="photo3" />
          <div clasName="paragraf2">
 This is a sample project. You can browse the project details by<br></br> clicking the button.</div>
          <div className="butonC1">
            <button>React</button>
            <button>Redux</button>
            <button>Axios</button>
          </div>
          <div style={{ marginTop: "30px" }}>
            <a
              style={{ textDecoration: "underline", color: " #dc0c71" }}
              href="https://github.com/tugceozdmr/FSWeb-S9-Sprint-Challenge"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="imgcont">
          <img src={Proj2} alt="" className="photo4" />
          <div clasName="paragraf3">In this project, I prepared a pizza <br></br>order form. You can visit my github <br></br>page to view the project details.</div>
          <div className="butonC2">
            <button>React</button>
            <button>Redux</button>
            <button>Axios </button>
          </div>
          <div style={{ marginTop: "30px" }}>
            <a
              style={{ textDecoration: "underline", color: " #dc0c71" }}
              href="https://github.com/tugceozdmr/FSWeb-S7-Challenge"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
