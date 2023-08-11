import React from "react";
import ReactDOM from "react-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-div">
            <div>
                <span className="footer-name">Rocky. Feel Free to Copy.</span>
            </div>

            <div className="links-conts">
                <span><a href = "#" target = "_self" className="link"> LinkedIn </a></span>
                <span><a href = "#" target = "_self" className="link"> Instagram </a></span>
                <span><a href = "#" target = "_self" className="link"> Facebook </a></span>
                <span><a href = "#" target = "_self" className="link"> X </a></span>
            </div>
        </div>
    )
}


export default Footer;