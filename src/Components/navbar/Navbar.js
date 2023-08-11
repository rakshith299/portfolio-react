import React from "react";
import ReactDOM from "react-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className = "main-div">
            <nav className="navbar">
                <div className="name-cont">
                    <h2>Rakshith</h2>
                </div>
                <div className="links-cont">
                    <span className="span">Home</span>
                    <span className="span">About Me </span>
                    <span className="span">Contact</span>
                    <span className="span"> Skills</span>
                    <span className="span">Qualification</span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;