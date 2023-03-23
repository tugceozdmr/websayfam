import "./App.css";
import "./global.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Profile from "./components/profile/Profile";
import Projects from "./components/prj/Projects";
import Footer from "./components/footer/Footer";
import React from "react";
// import Hireme from  "./components/hireme/Hireme";

// import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Skills />
      <div className="separator" />
      <Profile />
      <div className="separator" />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
