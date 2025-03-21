import React from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "E-Commerce Website ",
    description:
      "Developed a fully functional E-Commerce platform using the MERN stack. Features include user authentication (JWT), product listing, cart management, secure checkout, and order tracking. Integrated a responsive UI with Tailwind CSS for a seamless user experience. Implemented RESTful APIs, Redux for state management, and MongoDB for efficient data storage.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    image: image2,
    title: "POS SYSTEM",
    description:
      "Built a comprehensive POS (Point of Sale) system using the MERN stack with table management, order processing, and customer handling. Features include real-time order status updates, automatic table availability management, and a clean UI with Tailwind CSS. Implemented Redux for state management, RESTful APIs for seamless data flow, and MongoDB for efficient data storage. Ensured a structured and scalable architecture for smooth operations.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    image: image3,
    title: "Job Tracker",
    description:
      "Developed a Job Tracker application using the MERN stack to help users manage job applications efficiently. Features include job posting, application tracking, status updates, and search/filter functionalities. Integrated user authentication (JWT), a responsive UI with Tailwind CSS, and Redux for state management. Implemented RESTful APIs and MongoDB for secure and scalable data handling.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    image: image4,
    title: "Exploring Sentiments in Movie Reviews using BERT Algorithm",
    description:
      "Developed a sentiment analysis model to classify movie reviews as positive or negative using the BERT algorithm. The model leverages natural language processing (NLP) to understand contextual meaning and sentiment in text. Preprocessed and tokenized review data, fine-tuned BERT on a labeled dataset, and evaluated performance using accuracy and F1-score metrics. Integrated the model into a user-friendly interface for real-time sentiment prediction.",
    technologies: ["Python", "TensorFlow", "BERT"],
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
