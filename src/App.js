import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/prj/Projects";
import Footer from "./components/Footer";
import React from "react";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Header />

      <Hero />

      <Skills />

      <Profile />
      <Projects />
      <Footer />

      {/* <Link to="/form">Form</Link> */}
      {/* <Route path="/form" component={Form} />
     
    </Router> */}
    </div>
  );
}

export default App;
