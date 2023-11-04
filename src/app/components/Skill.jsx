import React from "react";
import Techstack from "./Techstack";


function Skill() {

    return (
        <section id="education">
        <div className="skill">
            <div className="p-4  border-gray-300 rounded-lg flex flex-col items-center" >
                <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600">SKILL</h1>
                <div className="mt-4">
                    <Techstack />
                </div>
            </div>
        </div>
        </section>
    );
}

export default Skill;
