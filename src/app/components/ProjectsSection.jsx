"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "student committee website",
    description: "student committee website You can click the link to view.",
    image: "/images/projects/pakphueterr.png",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/pakphueterr/promote",
    previewUrl: "https://pakphueterr.github.io/promote/bio/",
  },
  {
    id: 2,
    title: "Simple Game",
    description: "Create a game in unity in class.",
    image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzV2a25tZGxuNzBzcjIwbzMwZHlxcTk0cXN1NWdtbnkzcndpcTd6cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ChIPHcOU4XkOmMmNgR/giphy.gif",
    tag: ["All", "CPE101"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "2D Drawing",
    description: "Create 2D Drawing in unity in class.",
    image: "/images/projects/2d.png",
    tag: ["All", "CPE101"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 4,
    title: "Microbit",
    description: "Write a micro bit in the lesson on making the robot walk in a circle.",
    image: "/images/projects/microbit.png",
    tag: ["All", "CPE101"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 5,
    title: "midterm project",
    description: "Make a robot that sorts colors and picks them up in the designated area. The robot writes code using microbit. You can view the code by clicking the view code button.",
    image: "/images/projects/MT_Project.JPG",
    tag: ["All", "CPE101"],
    gitUrl: "https://github.com/tikpoptv/expo",
    previewUrl: "https://makecode.microbit.org/S52527-16162-75089-23196",
  },

  {
    id: 6,
    title: "Arduino",
    description: "Write an Arduino program to control the turning on and off of sound files and the LCD screen.",
    image: "/images/projects/arduino_W.png",
    tag: ["All", "CPE101"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 7,
    title: "React Website",
    description: "Website writing project to introduce yourself But I wanted to challenge myself, so I wrote React.",
    image: "/images/projects/reactweb.png",
    tag: ["All", "CPE101"],
    gitUrl: "https://github.com/tikpoptv/React-website",
    previewUrl: "https://cpe101-react-website.vercel.app/",
  },

  {
    id: 8,
    title: "MSS Project",
    description: "MSS Project is a high school project to create a security system using motion sensors. It uses the EPS8266 board as a processing unit and can be controlled remotely via the internet.",
    image: "/images/projects/msspro.png",
    tag: ["All", "Other"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 9,
    title: "MSS Project",
    description: "It's a simple website using HTML but it's very beautiful. You can click the link to view.",
    image: "/images/projects/websitesim.png",
    tag: ["All", "Other"],
    gitUrl: "/",
    previewUrl: "https://tikpoptv.github.io/Recommended_places_in_Anime/",
  },
  
]; 

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="CPE101"
          isSelected={tag === "CPE101"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
