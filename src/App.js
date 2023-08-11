import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./Components/navbar/Navbar.js"
import Navbar from "./Components/navbar/Navbar.js";
import Aboutme from "./Components/aboutMe/Aboutme.js";
import Skills from "./Components/skills/Skills.js";
import Qualification from "./Components/qualification/Qualification";
import Project from "./Components/projects/Project";
import Footer from "./Components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Aboutme/>
      <Skills/>
      <Qualification/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App;