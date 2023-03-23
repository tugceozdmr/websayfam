import React from "react";
import "./header.css";

const handleClick = () => {
  window.scrollTo(0, 600);
};
const handleClick2 = () => {
  window.scrollTo(0, 1565);
};

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch("TugceOzdemir.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "TugceOzdemir.pdf";
      alink.click();
    });
  });
};

export default function Header() {
  return (
    <div className="title">
      <button onClick={handleClick} className="title1">
        Skills
      </button>
      <button onClick={handleClick2} className="title2">
        Projects
      </button>
      <button onClick={onButtonClick} className="title3">
        Hire Me
      </button>
    </div>
  );
}
