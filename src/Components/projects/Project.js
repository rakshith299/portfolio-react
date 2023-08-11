import React from "react";
import ReactDOM from "react-dom";
import "./Project.css";

const Project = () => {
    return (
        <div className="skill-div">
            <h2 className="heading">Projects</h2>
            <p className="para">
            Developed a full-stack web application that enables users to monitor their expenses, 
            set budgets, and view financial trends. Utilized React for the frontend, Express.js 
            for the backend, and MongoDB for database operations. Incorporated user authentication 
            through JWT and OAuth, ensuring secure data access.
            </p>

            <hr className="line"/>
        </div>
    )
}

export default Project;