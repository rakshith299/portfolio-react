import React from "react";
import ReactDom from "react-dom";
import "./Aboutme.css";
import myImage from "../supports/albert-dera-ILip77SbmOE-unsplash.jpg";

const Aboutme = () => {
    return (
        <div className="main-div-about">
            <img src = {myImage} className="image"/>
            <div>
                <p className="text">
                    A solution-driven software developer with over 5 years of 
                    experience in crafting innovative applications across diverse 
                    platforms. I am passionate about blending art with technology, 
                    resulting in intuitive and impactful user experiences. Having worked 
                    with global teams, I thrive in collaborative environments and take 
                    pride in delivering efficient, scalable, and maintainable code.
                </p>
            </div>

            <hr className="line"/>
        </div>
    )
}

export default Aboutme;