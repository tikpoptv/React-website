import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Popup from "./Popup"; // Import the Popup component

import {
    FaMicrochip,
    FaUnity,
    FaDraftingCompass,
    FaFileCode,
    FaServer,
    FaFileUpload
} from "react-icons/fa";

import { DiHtml5, DiCss3, DiSass, DiDatabase, DiMongodb } from "react-icons/di";

import { IoMdPhonePortrait } from "react-icons/io";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiPython,
    DiJava,
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiGit
} from "react-icons/di";

import "./Techstack.css";

function Techstack() {
    const [iconDescription, setIconDescription] = useState(null);

    const handleIconClick = (description) => {
        setIconDescription(description);
    };

    const closePopup = () => {
        setIconDescription(null);
    };

    return (
        <Row className="tech-stack-container">
            <div className="text-content">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-600 ">
                    Tech Stack
                </h1>
                <h1 className="pt-2 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-sky-300 ">
                    <TypeAnimation
                        sequence={[
                            "please click to icon",
                            1000,
                            "please click to icon.",
                            1000,
                            "please click to icon..",
                            1000,
                            "please click to icon...",
                            1000,
                            "please click to icon....",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
            </div>
            <div className="icons-container">
                <FaMicrochip
                    className="tech-icon"
                    onClick={() => handleIconClick("Microbit is a pocket-sized microcontroller for programming and electronics projects.")}
                />
                <FaUnity
                    className="tech-icon"
                    onClick={() => handleIconClick("Unity is a popular game development platform for creating 2D and 3D games.")}
                />
                <FaDraftingCompass
                    className="tech-icon"
                    onClick={() => handleIconClick("AutoCAD is a computer-aided design (CAD) software for drafting and designing.")}
                />
                <FaFileCode
                    className="tech-icon"
                    onClick={() => handleIconClick("JSON (JavaScript Object Notation) is a lightweight data interchange format.")}
                />
                <FaServer
                    className="tech-icon"
                    onClick={() => handleIconClick("PHP is a server-side scripting language for web development.")}
                />
                <FaFileUpload
                    className="tech-icon"
                    onClick={() => handleIconClick("FTP (File Transfer Protocol) is used to upload files to a server.")}
                />
                <IoMdPhonePortrait
                    className="tech-icon"
                    onClick={() => handleIconClick("Microbit is a pocket-sized microcontroller for programming and electronics projects.")}
                />
                <CgCPlusPlus
                    className="tech-icon"
                    onClick={() => handleIconClick("C++ is a powerful programming language.")}
                />
                <DiPython
                    className="tech-icon"
                    onClick={() => handleIconClick("Python is a versatile programming language.")}
                />
                <DiJava
                    className="tech-icon"
                    onClick={() => handleIconClick("Java is a widely-used programming language.")}
                />
                <DiJavascript1
                    className="tech-icon"
                    onClick={() => handleIconClick("JavaScript is a popular scripting language.")}
                />
                <DiReact
                    className="tech-icon"
                    onClick={() => handleIconClick("React is a JavaScript library for building user interfaces.")}
                />
                <DiNodejs
                    className="tech-icon"
                    onClick={() => handleIconClick("Node.js is a runtime environment for executing JavaScript on the server.")}
                />
                <DiGit
                    className="tech-icon"
                    onClick={() => handleIconClick("Git is a distributed version control system.")}
                />
                <DiHtml5
                    className="tech-icon"
                    onClick={() => handleIconClick("HTML5 is a markup language for creating web pages.")}
                />
                <DiCss3
                    className="tech-icon"
                    onClick={() => handleIconClick("CSS3 is a stylesheet language used for web page design.")}
                />
                <DiSass
                    className="tech-icon"
                    onClick={() => handleIconClick("SCSS is a superset of CSS, providing more powerful styling capabilities.")}
                />
                <DiDatabase
                    className="tech-icon"
                    onClick={() => handleIconClick("SQL is a language for managing and querying relational databases.")}
                />
                <DiMongodb
                    className="tech-icon"
                    onClick={() => handleIconClick("MongoDB is a NoSQL database for building scalable and flexible applications.")}
                />
            </div>
            {iconDescription && (
                <Popup description={iconDescription} onClose={closePopup} />
            )}
        </Row>
    );
}

export default Techstack;
